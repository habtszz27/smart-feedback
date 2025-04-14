const express = require("express"); const app = express(); const feedbackRoute = require("./routes/feedback"); app.use("/api/feedback", feedbackRoute); app.listen(5000, () => console.log("Server running"));
app.get('/api/feedback', (req, res) => {
  res.json({ message: 'Backend is working fine!' });
});
