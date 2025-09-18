const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('rate-limiter-flexible').RateLimiterMemory;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

// Charger les variables d'environnement
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Limiter les requêtes sur les routes d'authentification
const rateLimiter = new rateLimit({
  keyPrefix: 'auth',
  points: 5,
  duration: 60,
});

// Route d'exemple
app.get('/', (req, res) => {
  res.send('Next Quest API - Bienvenue !');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});