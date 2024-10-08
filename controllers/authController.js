const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
    const { id } = req.body;
    
    const token = jwt.sign({ id: id, role: 'user' }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60*60*1000
    });

    res.status(200).json({ message: "Logged In Successful" });
}

exports.admin_login = async (req, res) => {
    const { id } = req.body;
    
    const token = jwt.sign({ id, role: 'admin' }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
    
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60*60*1000
    });

    res.status(200).json({ message: "Logged In Successful" });
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            secure: true,
            httpOnly: true,
            sameSite: 'strict'
        });
        res.status(200).json({ message: "Successfully Logged out" });
    }
    catch(error) {
        res.status(400).json({ error: error.message });
    }
}