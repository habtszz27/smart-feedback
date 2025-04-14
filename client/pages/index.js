import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('https://smart-feedback-server.onrender.com/api/feedback')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => {
        console.error(err);
        setMessage('Failed to fetch from backend.');
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Smart Feedback</h1>
      <p>{message}</p>
    </div>
  );
}
