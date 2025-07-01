import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useCart } from "../context/CartContext";
import logo from "C:\\Users\\keval gajjar\\Downloads\\logo2.png"; // Make sure your logo is in src/assets/logo.png

export function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" className="logo-image" />
        <span className="brand-text">E-Shop</span>
      </Link>
      <div className="nav-links">
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">
          Cart
          {cartItems.length > 0 && (
            <span className="cart-badge">
              {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}
