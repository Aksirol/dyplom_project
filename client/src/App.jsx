// client/src/App.jsx
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Стан для збереження товарів
  const [products, setProducts] = useState([]);

  // Цей код спрацьовує один раз при завантаженні сторінки
  useEffect(() => {
    fetch('http://localhost:5000/api/products') // Стукаємо до нашого сервера
      .then((res) => res.json())                // Перетворюємо відповідь у JSON
      .then((data) => {
        console.log("Дані отримано:", data);    // Виводимо в консоль для перевірки
        setProducts(data);                      // Зберігаємо товари у пам'ять React
      })
      .catch((err) => console.error("Помилка завантаження:", err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>🛒 Smart Grocery Assistant</h1>
      </header>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {/* Картинка товару */}
            <div className="image-container">
              <img src={product.image} alt={product.title} />
            </div>
            
            {/* Інформація */}
            <div className="info">
              <h3>{product.title}</h3>
              <p className="shop-badge">{product.shop}</p>
              
              <div className="price-block">
                {product.oldPrice && (
                  <span className="old-price">{product.oldPrice} грн</span>
                )}
                <span className="price">{product.price} грн</span>
              </div>

              {/* Кнопка "Аналіз" (поки не працює) */}
              <button className="analyze-btn">Перевірити склад</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;