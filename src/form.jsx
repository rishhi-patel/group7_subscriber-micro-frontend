import { useState } from 'preact/hooks';
import Toast from './toast'; // Adjust path as needed

export function SubscriberForm() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

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

  return <form onSubmit={event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());
    const sUrl = `${import.meta.url.substring(0, import.meta.url.lastIndexOf('/'))}/subscribers`
    fetch(sUrl, {
      method: 'POST', // Specify the HTTP method as POST
      headers: {
        'Content-Type': 'application/json' // Indicate that the request body is JSON
      },
      body: JSON.stringify(formObject) // Convert the JavaScript object to a JSON string
    })
      .then(response => {
        response.json().then(data => {
          handleShowToast(data.message, response.ok ? "success" : "error");
          console.log(data); // Handle the response data
        })

      })
      .catch(error => {
        console.error('Error:', error); // Handle any errors during the fetch operation
      });        // console.log(formObject);
  }}>
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
      <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <Toast
          message={toastMessage}
          type={toastType}
          onClose={handleCloseToast}
        />
      </div>
    )}
  </form>
}