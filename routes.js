const express = require('express');
const { login, admin_login } = require('./controllers/authController');
const authenticateToken = require('./middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/admin_login', admin_login);
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route", token: req.token });
})

module.exports = router;