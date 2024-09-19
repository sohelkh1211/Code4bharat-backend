const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateToken =  async (req, res, next) => {
    const token = req.cookies.token;

    if(!token) {
        return res.status(401).json({ message: "No token, Authorization denied"});
    }

    try {

       const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = decoded;
        req.token = token;
        next();
    } catch(error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = authenticateToken;