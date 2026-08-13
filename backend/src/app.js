const express = require('express');
const { verifyConnection } = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'API opérationnelle' });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
  verifyConnection();
});
