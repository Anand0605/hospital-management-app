const express = require('express');
const { getAllUsers } = require('../controllers/userController');
const { protect, authorizeRoles } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', protect, authorizeRoles('admin'), getAllUsers);

module.exports = router;
