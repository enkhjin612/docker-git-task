const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: "Hello, Docker and Git practice project!" });
});

app.get('/api/status', (req, res) => {
  res.json({ status: "running", timestamp: new Date() });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});