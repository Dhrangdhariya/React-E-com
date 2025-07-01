import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; 

export function Home() {
  return (
    <div className="home-container text-center">
      <h1 className="home-title">Welcome to E-Shop</h1>
      <p className="home-text">Find your favorite products here!</p>
      <Link to="/products" className="shop-button">Shop Now</Link>
    </div>
  );
}
