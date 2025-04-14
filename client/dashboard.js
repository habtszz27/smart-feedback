import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [stats, setStats] = useState({ positive: 0, neutral: 0, negative: 0 });

  useEffect(() => {
    fetch('https://smart-feedback-server.onrender.com/feedbacks')
      .then(res => res.json())
      .then(data => {
        setFeedbacks(data);

        const sentimentCounts = data.reduce((acc, fb) => {
          acc[fb.sentiment] = (acc[fb.sentiment] || 0) + 1;
          return acc;
        }, { positive: 0, neutral: 0, negative: 0 });

        setStats(sentimentCounts);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Feedback Dashboard</h2>
      <div style={{ marginBottom: '1rem' }}>
        <strong>Positive:</strong> {stats.positive} | 
        <strong> Neutral:</strong> {stats.neutral} | 
        <strong> Negative:</strong> {stats.negative}
      </div>
      {feedbacks.map((fb, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <p><strong>Feedback:</strong> {fb.text}</p>
          <p><strong>Sentiment:</strong> {fb.sentiment}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;

