// server/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Імпортуємо модель товару
const Product = require('./models/Product');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Підключення до MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB Connected!'))
    .catch((err) => console.error('❌ MongoDB Connection Error:', err));

// --- API ROUTES (Маршрути) ---

// 1. Отримати всі товари
app.get('/api/products', async (req, res) => {
    try {
        // Знаходимо всі записи в колекції Product
        const products = await Product.find();
        // Відправляємо їх як JSON
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. Тестовий маршрут
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});