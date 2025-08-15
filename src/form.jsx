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
        maxWidth: 420,
        margin: "48px auto",
        padding: 40,
        background: "linear-gradient(135deg, #f9fafc 0%, #a7f3d0 100%)",
        borderRadius: 24,
        boxShadow: "0 8px 32px rgba(34,197,94,0.18)",
        fontFamily: "Segoe UI, Arial, sans-serif",
        border: "1px solid #6ee7b7",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 28,
        }}
      >
        <svg
          width="38"
          height="38"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginRight: 10 }}
        >
          <circle cx="12" cy="12" r="12" fill="#10b981" />
          <path
            d="M7 12l3 3 7-7"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2
          style={{ margin: 0, color: "#065f46", fontWeight: 700, fontSize: 26 }}
        >
          Subscribe to Updates
        </h2>
      </div>
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
          gap: 22,
        }}
      >
        <label style={{ fontWeight: 600, color: "#065f46", fontSize: 16 }}>
          Name
          <input
            name="name"
            placeholder="Your name"
            required
            style={{
              marginTop: 8,
              padding: "12px 14px",
              borderRadius: 10,
              border: "1.5px solid #6ee7b7",
              fontSize: 17,
              outline: "none",
              background: "#fff",
              boxShadow: "0 1px 4px rgba(16,185,129,0.07)",
              transition: "border 0.2s",
            }}
          />
        </label>
        <label style={{ fontWeight: 600, color: "#065f46", fontSize: 16 }}>
          Email
          <input
            name="email"
            type="email"
            placeholder="Your email address"
            required
            style={{
              marginTop: 8,
              padding: "12px 14px",
              borderRadius: 10,
              border: "1.5px solid #6ee7b7",
              fontSize: 17,
              outline: "none",
              background: "#fff",
              boxShadow: "0 1px 4px rgba(16,185,129,0.07)",
              transition: "border 0.2s",
            }}
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "14px 0",
            borderRadius: 10,
            border: "none",
            background: loading
              ? "#6ee7b7"
              : "linear-gradient(90deg,#10b981 0%,#34d399 100%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 19,
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 2px 12px rgba(16,185,129,0.13)",
            transition: "background 0.2s",
            letterSpacing: 0.5,
          }}
        >
          {loading ? (
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 50 50"
                style={{ verticalAlign: "middle", marginRight: 8 }}
              >
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="5"
                  strokeDasharray="31.4 31.4"
                  strokeLinecap="round"
                  style={{ animation: "spin 1s linear infinite" }}
                />
                <style>
                  {`@keyframes spin { 100% { transform: rotate(360deg); } }`}
                </style>
              </svg>
              Sending...
            </span>
          ) : (
            "Send"
          )}
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
      <div
        style={{
          position: "absolute",
          bottom: 12,
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: 13,
          color: "#10b981",
          opacity: 0.7,
        }}
      >
        We respect your privacy. Unsubscribe anytime.
      </div>
    </div>
  )
}
