const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');
const { createRecord, getMyRecords, getPatientRecords } = require('../controllers/recordController');

const router = express.Router();

// Doctor creates record for a patient
router.post('/', protect, authorizeRoles('doctor'), createRecord);

// Patient views own records
router.get('/me', protect, authorizeRoles('patient'), getMyRecords);

// Admin/Doctor views patient records
router.get('/:patientId', protect, authorizeRoles('admin', 'doctor'), getPatientRecords);

module.exports = router;
