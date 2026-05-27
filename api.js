// index.js
const express = require('express');
const app = express();
const visiteur = process.env.visiteur || 'Anonyme';
const fs = require('fs');

app.get('/secret-check', (req, res) => {

  try {

    const secret = fs.readFileSync(
      '/etc/secrets/secret-message.txt',
      'utf8'
    );

    res.json({
      status: "secret loaded",
      length: secret.length
    });

  }

  catch {

    res.status(500).json({
      status: "secret missing"
    });

  }

});

app.get('/health', (req, res) => {
  res.json({
    status: "ok",
    environment: process.env.APP_ENV || "local"
  });
});

app.get('/', (req, res) => {
  res.send('Application deployed successfully');
});

app.get('/api', (req, res) => {
  res.sen('New API');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
