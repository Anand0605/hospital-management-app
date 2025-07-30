// const express = require('express');
// const { getAllUsers } = require('../controllers/userController');
// const { protect, authorizeRoles } = require('../middlewares/authMiddleware'); // ✅ Correct import

// const router = express.Router();

// router.get('/', protect, authorizeRoles('admin'), getAllUsers); // ✅ Admin-only access

// module.exports = router;

const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
