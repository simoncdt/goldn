const db = require('../db');

const Appointment = {
    // Créer un rendez-vous
    create: (appointmentData, callback) => {
        const query = `
            INSERT INTO RendezVous (criteres, prenom, nom, email, telephone, message)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const values = [
            appointmentData.criteres,
            appointmentData.prenom,
            appointmentData.nom,
            appointmentData.email,
            appointmentData.telephone,
            appointmentData.message
        ];

        db.query(query, values, (err, result) => {
            if (err) return callback(err);
            callback(null, result);
        });
    },

    // Obtenir tous les rendez-vous
    getAll: (callback) => {
        const query = 'SELECT * FROM RendezVous';
        db.query(query, (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
};

module.exports = Appointment;