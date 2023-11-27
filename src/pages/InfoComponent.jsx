import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";

function InfoComponent() {
  const [ordercount, setOrdercount] = useState(0);

  const handleIncrement = () => {
    // Check if the count is already at the minimum value (0)
    if (ordercount >= 0) {
      setOrdercount(ordercount + 1);
    }
  };

  const handleDecrement = () => {
    // Check if the count is greater than 0 before decrementing
    if (ordercount > 0) {
      setOrdercount(ordercount - 1);
    }
  };

  return (
    <div className="info-div product-container-child">
      <span className="brand-span">SNEAKER COMPANY</span>
      <h1 className="product-name">Fall Limited Edition Sneakers</h1>
      <p className="product-details">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-div">
        <h1>$125.00</h1>
        <span>50%</span>
      </div>

      <span className="price-after-discount">$250.00</span>

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
        <button className="add-to-cart-btn">
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
