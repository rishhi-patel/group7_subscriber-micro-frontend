import { useEffect, useState } from 'preact/hooks';
import { tracer } from './otel-tool.js';
import Toast from './toast'; // Adjust path as needed

export function SubscriberForm() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  // Create a span for component lifecycle
  useEffect(() => {
    const span = tracer.startSpan('subscriber_form_mounted');
    span.setAttribute('component', 'SubscriberForm');
    span.setAttribute('action', 'component_mount');

    return () => {
      span.setAttribute('action', 'component_unmount');
      span.end();
    };
  }, []);

  const handleShowToast = (message, type = '') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    setToastMessage('');
    setToastType('');
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        // Start span for form submission
        const span = tracer.startSpan('form_submission');
        span.setAttribute('form.action', 'submit');

        const formData = new FormData(event.target);
        const formObject = Object.fromEntries(formData.entries());

        // Add form data to span
        span.setAttribute('form.name', formObject.name);
        span.setAttribute('form.email', formObject.email || 'none');

        const sUrl = `${import.meta.url.substring(
          0,
          import.meta.url.lastIndexOf('/')
        )}/subscribers`;

        // Start span for API call
        const apiSpan = tracer.startSpan('api_call');
        apiSpan.setAttribute('http.url', sUrl);
        apiSpan.setAttribute('http.method', 'POST');

        fetch(sUrl, {
          method: 'POST', // Specify the HTTP method as POST
          headers: {
            'Content-Type': 'application/json', // Indicate that the request body is JSON
          },
          body: JSON.stringify(formObject), // Convert the JavaScript object to a JSON string
        })
          .then((response) => {
            apiSpan.setAttribute('http.status_code', response.status);

            response.json().then((data) => {
              apiSpan.setAttribute('response.message', data.message);
              apiSpan.setAttribute('response.id', data.id);

              const messageType = response.ok ? 'success' : 'error';
              handleShowToast(data.message, messageType);

              // Add success/error to span
              if (response.ok) {
                span.setAttribute('result', 'success');
                span.setAttribute('subscriber_id', data.id);
              } else {
                span.setAttribute('result', 'error');
                span.setAttribute('error.message', data.message);
              }

              console.log(data); // Handle the response data
            });
          })
          .catch((error) => {
            // Record error in spans
            apiSpan.recordException(error);
            span.recordException(error);

            span.setAttribute('result', 'error');
            span.setAttribute('error.type', 'network_error');
            span.setAttribute('error.message', error.message);

            console.error('Error:', error); // Handle any errors during the fetch operation
          })
          .finally(() => {
            apiSpan.end();
            span.end();
          });
      }}
    >
      <label>
        name
        <input name="name" placeholder="your name" />
      </label>
      <label>
        email
        <input name="email" type="email" placeholder="your email address" />
      </label>
      <button type="submit">Send</button>
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
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
    </form>
  );
}
