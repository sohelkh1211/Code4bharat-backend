const express = require('express');
const { login, admin_login, logout } = require('./controllers/authController');
const authenticateToken = require('./middleware/authMiddleware');

const router = express.Router();

router.post('/login', login);
router.post('/admin_login', admin_login);
router.post('/logout', logout);

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: "This is a protected route", token: req.token });
})


module.exports = router;