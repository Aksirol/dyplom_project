// server/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

// Тестові дані
const products = [
    {
        title: "Молоко Яготинське 2.6%",
        price: 34.50,
        oldPrice: 42.00,
        shop: "ATB",
        image: "https://src.zakaz.atbmarket.com/cache/images/samara/catalog_product_main_248/1258604314166299.jpg",
        category: "dairy",
        ingredients: "Молоко коров'яче незбиране, молоко знежирене.",
        isPromo: true
    },
    {
        title: "Шоколад Milka молочний",
        price: 56.00,
        oldPrice: 56.00,
        shop: "Silpo",
        image: "https://images.silpo.ua/products/1600x1600/webp/4c/7f/4c7fd8e6-1215-4654-a035-649033322198.png",
        category: "sweets",
        ingredients: "Цукор, масло какао, какао терте, молоко сухе знежирене, сироватка суха молочна, жир молочний, емульгатор (лецитин соєвий), паста горіхова (фундук), ароматизатор.",
        isPromo: false
    },
    {
        title: "Ковбаса лікарська",
        price: 89.90,
        oldPrice: 120.00,
        shop: "ATB",
        image: "https://src.zakaz.atbmarket.com/cache/images/samara/catalog_product_main_248/1258604314166299.jpg", // Тимчасова заглушка
        category: "meat",
        ingredients: "Свинина, яловичина, вода питна, яйця курячі, молоко коров'яче сухе, сіль кухонна, цукор, стабілізатор кольору Е250.",
        isPromo: true
    }
];

// Підключення та завантаження
mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log('🔌 Підключено до бази для засіву...');
        
        // Очистимо базу перед записом, щоб не дублювати дані
        await Product.deleteMany({});
        console.log('🧹 Старі дані видалено.');

        // Записуємо нові
        await Product.insertMany(products);
        console.log('✅ Тестові товари успішно додані!');
        
        mongoose.disconnect();
    })
    .catch(err => {
        console.error(err);
        mongoose.disconnect();
    });