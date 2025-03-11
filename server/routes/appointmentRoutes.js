const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Créer un rendez-vous
router.post('/', appointmentController.createAppointment);

// Obtenir tous les rendez-vous
router.get('/', appointmentController.getAppointments);

module.exports = router;