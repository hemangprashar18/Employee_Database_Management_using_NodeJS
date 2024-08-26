const User = require('../models/userModel');
const sendEmail = require('../services/emailService');

async function registerUser(req, res) {
    try {
        const { fullName, lastName, email, number } = req.body;

        const password = `${fullName.slice(0, 2)}${lastName.slice(-2)}${number.slice(0, 4)}`;

        const newUser = new User({
            fullName,
            lastName,
            email,
            number,
            password,
        });

        await newUser.save();

        const loginUrl = `http://localhost:3000/login`;

        await sendEmail(email, fullName, password, loginUrl);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

async function loginUser(req, res) {
    try {
        const { fullName, password } = req.body;

        const user = await User.findOne({ fullName });

        if (!user || user.password !== password) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
}

module.exports = { registerUser, loginUser };







