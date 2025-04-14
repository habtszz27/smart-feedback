const express = require("express"); const app = express(); const feedbackRoute = require("./routes/feedback"); app.use("/api/feedback", feedbackRoute); app.listen(5000, () => console.log("Server running"))
   const cors = require('cors');

app.use(cors({
  origin: 'https://smart-feedback-client.onrender.com', // change to your actual client URL
  credentials: true
})); ;
app.get('/api/feedback', (req, res) => {
  res.json({ message: 'Backend is working fine!' });
});
