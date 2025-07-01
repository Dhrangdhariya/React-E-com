// src/pages/Products.js
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import './Products.css';
import myImage from "C:\\Users\\keval gajjar\\Downloads\\image.jpg";
import myImage2 from "C:\\Users\\keval gajjar\\Downloads\\image2.jpg";
import myImage3 from "C:\\Users\\keval gajjar\\Downloads\\image3.jpg";
import myImage4 from "C:\\Users\\keval gajjar\\Downloads\\image4.jpg";
import myImage5 from "C:\\Users\\keval gajjar\\Downloads\\image5.jpg";
import myImage6 from "C:\\Users\\keval gajjar\\Downloads\\image6.jpg";

const mockProducts = [
  {
    id: 1,
    name: "Smart LED Desk Lamp",
    price: "$49.99",
    image: myImage,
    description: "A stylish and modern desk lamp with adjustable brightness.",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Wireless Bluetooth Earbuds",
    price: "$14.99",
    image: myImage2,
    description: "High-quality sound with a comfortable fit.",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Eco-Friendly Yoga Mat",
    price: "$29.99",
    image: myImage3,
    description: "Made from sustainable materials for a better planet.",
    category: "Fitness",
  },
  {
    id: 4,
    name: "Aromatic Scented Candles",
    price: "$19.99",
    image: myImage5,
    description: "Relax and refresh your space with these candles.",
    category: "Lifestyle",
  },
  {
    id: 5,
    name: "Resistance Bands Set",
    price: "$24.99",
    image: myImage4,
    description: "Perfect for home workouts and physical therapy.",
    category: "Fitness",
  },
  {
    id: 6,
    name: "Wild Stone Edge EDP Premium",
    price: "$14.99",
    image: myImage6,
    description: "Perfume for Men, Long-lasting Parfum, Fragrance for Modern Lifestyle",
    category: "Lifestyle",
  },
];

const categories = ["All", "Electronics", "Fitness", "Lifestyle"];

export function Products() {
  const { addToCart } = useCart(); // From your CartContext
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="page-content">
      <h2 className="products-title">All Products</h2>

      {/* Category Buttons */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", marginLeft: "1.5rem" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-button ${selectedCategory === cat ? "selected" : ""}`}
            style={{ backgroundColor: selectedCategory === cat ? "#1d4ed8" : "" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-layout">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">{product.price}</p>
                <button
                  className="add-to-cart-button category-button"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price:
                        typeof product.price === "string"
                          ? parseFloat(product.price.replace("$", ""))
                          : product.price,
                      image: product.image,
                      quantity: 1,
                    })
                  }
                >
                  Add to Cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
