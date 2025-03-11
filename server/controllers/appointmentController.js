const Appointment = require('../models/Appointment');

// Créer un rendez-vous
exports.createAppointment = (req, res) => {
    const appointmentData = req.body;

    Appointment.create(appointmentData, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la création du rendez-vous', error: err });
        }
        res.status(201).json({ message: 'Rendez-vous créé avec succès', id: result.insertId });
    });
};

// Obtenir tous les rendez-vous
exports.getAppointments = (req, res) => {
    Appointment.getAll((err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur lors de la récupération des rendez-vous', error: err });
        }
        res.status(200).json(results);
    });
};