const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true
}));

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        app.listen(3000);
        console.log('Successfully connected to the database!');
    } catch (e) {
        console.log(e.message);
    }
};


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public', 'loginscreen')));
app.use(express.static(path.join(__dirname, 'public', 'adminhub')));


app.get('/dashboard', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'adminhub', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'loginscreen', 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        res.status(200).send({ redirect: "/dashboard" });
    } else {
        res.status(500).send("Invalid credentials");
    }
});


connectDB();