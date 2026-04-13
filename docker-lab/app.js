const express = require('express');
const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.disable('x-powered-by');

app.get('/healthz', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  res.type('html').send('<h1>Hello from Docker!</h1><p>Running Node.js + Express inside a container.</p>');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});