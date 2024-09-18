exports.login = async (req, res) => {
    const { token } = req.body;
    
    res.cookie('token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 60*60*1000
    });

    res.status(200).json({ message: "Logged In Successful" });
}