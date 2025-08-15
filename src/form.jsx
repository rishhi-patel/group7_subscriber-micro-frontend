import { useEffect, useState } from "preact/hooks"
import { tracer } from "./otel-tool.js"
import Toast from "./toast" // Adjust path as needed

export function SubscriberForm() {
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [toastType, setToastType] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const span = tracer.startSpan("subscriber_form_mounted")
    span.setAttribute("component", "SubscriberForm")
    span.setAttribute("action", "component_mount")

    return () => {
      span.setAttribute("action", "component_unmount")
      span.end()
    }
  }, [])

  const handleShowToast = (message, type = "") => {
    setToastMessage(message)
    setToastType(type)
    setShowToast(true)
  }

  const handleCloseToast = () => {
    setShowToast(false)
    setToastMessage("")
    setToastType("")
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 32,
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(60,72,88,0.12)",
        fontFamily: "Segoe UI, Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24, color: "#3730a3" }}>
        Subscribe to Updates
      </h2>
      <form
        onSubmit={(event) => {
          event.preventDefault()
          setLoading(true)

          const span = tracer.startSpan("form_submission")
          span.setAttribute("form.action", "submit")

          const formData = new FormData(event.target)
          const formObject = Object.fromEntries(formData.entries())

          span.setAttribute("form.name", formObject.name)
          span.setAttribute("form.email", formObject.email || "none")

          const sUrl = `${import.meta.url.substring(
            0,
            import.meta.url.lastIndexOf("/")
          )}/subscribers`

          const apiSpan = tracer.startSpan("api_call")
          apiSpan.setAttribute("http.url", sUrl)
          apiSpan.setAttribute("http.method", "POST")

          fetch(sUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formObject),
          })
            .then((response) => {
              apiSpan.setAttribute("http.status_code", response.status)

              response.json().then((data) => {
                apiSpan.setAttribute("response.message", data.message)
                apiSpan.setAttribute("response.id", data.id)

                const messageType = response.ok ? "success" : "error"
                handleShowToast(data.message, messageType)

                if (response.ok) {
                  span.setAttribute("result", "success")
                  span.setAttribute("subscriber_id", data.id)
                } else {
                  span.setAttribute("result", "error")
                  span.setAttribute("error.message", data.message)
                }

                setLoading(false)
              })
            })
            .catch((error) => {
              apiSpan.recordException(error)
              span.recordException(error)

              span.setAttribute("result", "error")
              span.setAttribute("error.type", "network_error")
              span.setAttribute("error.message", error.message)

              setLoading(false)
            })
            .finally(() => {
              apiSpan.end()
              span.end()
            })
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 18,
        }}
      >
        <label style={{ fontWeight: 500, color: "#3730a3" }}>
          Name
          <input
            name="name"
            placeholder="Your name"
            required
            style={{
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #c7d2fe",
              fontSize: 16,
              outline: "none",
              background: "#fff",
              transition: "border 0.2s",
            }}
          />
        </label>
        <label style={{ fontWeight: 500, color: "#3730a3" }}>
          Email
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            required
            style={{
              marginTop: 6,
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #c7d2fe",
              fontSize: 16,
              outline: "none",
              background: "#fff",
              transition: "border 0.2s",
            }}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 0",
            borderRadius: 8,
            border: "none",
            background: loading ? "#a5b4fc" : "#6366f1",
            color: "#fff",
            fontWeight: 600,
            fontSize: 18,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
            transition: "background 0.2s",
          }}
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {showToast && (
        <div
          style={{
            position: "fixed",
            bottom: "32px",
            right: "32px",
            zIndex: 1000,
          }}
        >
          <Toast
            message={toastMessage}
            type={toastType}
            onClose={handleCloseToast}
          />
        </div>
      )}
    </div>
  )
}
