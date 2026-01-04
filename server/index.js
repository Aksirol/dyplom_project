// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (налаштування)
app.use(cors()); // Дозволяє фронтенду звертатися до бекенду
app.use(express.json()); // Дозволяє читати JSON у запитах

// Тестовий маршрут (щоб перевірити, чи все працює)
app.get('/api/test', (req, res) => {
    res.json({ message: 'Привіт! Сервер успішно працює 🚀' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});