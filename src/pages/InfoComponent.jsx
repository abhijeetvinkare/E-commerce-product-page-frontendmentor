import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { ProductData } from "../data/ProductData";

function InfoComponent() {
  const [ordercount, setOrdercount] = useState(1);

  const handleIncrement = () => {
    // Check if the count is already at the minimum value (0)
    if (ordercount >= 1) {
      setOrdercount(ordercount + 1);
    }
  };

  const handleDecrement = () => {
    // Check if the count is greater than 0 before decrementing
    if (ordercount > 1) {
      setOrdercount(ordercount - 1);
    }
  };

  function handleAddtoCart(e) {
    e.preventDefault();
    console.log(ordercount)
  }

  return (
    <div className="info-div product-container-child">
      <span className="brand-span">{ProductData.company}</span>
      <h1 className="product-name">{ProductData.productName}</h1>
      <p className="product-details">{ProductData.productDescription}</p>
      <div className="price-div">
        <h1>${(ProductData.productPrice * (1 - ProductData.discountPercentage / 100)).toFixed(2)}</h1>
        <span>{ProductData.discountPercentage}%</span>
      </div>

      <span className="actual-price">${ProductData.productPrice.toFixed(2)}</span>

      <div className="btn-div">
        <div className="btn-add-minus-div">
          <button className="btn-add-minus" onClick={handleIncrement}>
            +
          </button>
          <span className="order-count">{ordercount}</span>
          <button className="btn-add-minus" onClick={handleDecrement}>
            -
          </button>
        </div>
        <button className="add-to-cart-btn" onClick={handleAddtoCart}>
          <span>
            <IoCartOutline size={20} />
          </span>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default InfoComponent;
