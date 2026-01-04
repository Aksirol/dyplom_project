// server/models/Product.js
const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },       // Назва товару
    price: { type: Number, required: true },       // Актуальна ціна
    oldPrice: { type: Number },                    // Стара ціна (якщо є знижка)
    shop: { type: String, required: true },        // Назва магазину (ATB, Silpo)
    image: { type: String },                       // Посилання на картинку
    link: { type: String },                        // Пряме посилання на товар
    category: { type: String },                    // Категорія (молочка, бакалія)
    ingredients: { type: String },                 // Склад (текстом)
    isPromo: { type: Boolean, default: false },    // Чи це акція
    dateFetched: { type: Date, default: Date.now } // Коли ми знайшли цей товар
});

module.exports = mongoose.model('Product', ProductSchema);