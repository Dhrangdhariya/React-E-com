import React from "react";
import { useCart } from "../context/CartContext";
import './Cart.css';

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  const handleOrderNow = () => {
    alert("Thank you for your order!");
    clearCart(); // Clear cart after ordering
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="cart-text">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => updateQuantity(item.id, e.target.value)}
                  className="cart-item-quantity"
                />
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <p className="total-price">Total: ${totalPrice.toFixed(2)}</p>
            <button className="order-now-button" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
