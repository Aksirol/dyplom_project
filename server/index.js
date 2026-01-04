// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
// Ми беремо посилання з файлу .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected!'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// Тестовий маршрут
app.get('/api/test', (req, res) => {
    res.json({ message: 'Привіт! Сервер працює і база підключена 🚀' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});