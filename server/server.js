require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Route pour tester la connexion MySQL
app.get('/api', (req, res) => {
    db.query('SELECT "🚀 API Fonctionnelle avec MySQL !" AS message', (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(result[0]);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🔥 Serveur lancé sur http://localhost:${PORT}`));
