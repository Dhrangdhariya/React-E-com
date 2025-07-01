import React from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'; // Import the CSS file

export function ProductDetails() {
  const { id } = useParams();
  return (
    <div className="product-details-container">
      <h2 className="product-details-title">Product Details - ID: {id}</h2>
      <p className="product-details-text">Description and more info here.</p>
    </div>
  );
}