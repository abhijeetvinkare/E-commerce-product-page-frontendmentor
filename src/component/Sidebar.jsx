import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../assets/images/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import scrollLock from "scroll-lock";
import thumbnail  from "../assets/images/image-product-1-thumbnail.jpg"
import { MdDelete } from "react-icons/md";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProduct, setIsProduct] = useState(1);
  const [cartItemCount, setCartItemCount] = useState(5);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navToggle = isOpen ? (
    <IoClose size={30} onClick={toggleSidebar} className="icons" />
  ) : (
    <GiHamburgerMenu size={25} onClick={toggleSidebar} className="icons" />
  );

  // Enable/disable scrolling when the sidebar opens/closes
  useEffect(() => {
    if (isOpen) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [isOpen]);

  function handleCart(e) {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div className="sidebar">
      <div className="nav-toggle hamburger-icon">{navToggle}</div>
      <div className="logo">
        <h1>sneakers</h1>
      </div>
      <div
        className={`nav-items ${
          isOpen ? "nav-items-mobile-show" : "nav-items-mobile"
        }`}
      >
        <ul className="nav-list nav-list-mobile">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="cart-profile-div">
        <button className={`btn ${cartItemCount <= 0 ? '' : 'icon-cart-btn'}`} data-count={cartItemCount} onClick={handleCart}>
          <IoCartOutline size={28} className="icons" />
        </button>
        <button className="btn">
          <img className="avatar-img" src={avatar} alt="" />
        </button>
      </div>

      {isCartOpen && (
        <div className="cart-container">
          <div className="cart-heading">
            <h4>Cart</h4>
          </div>
          <div className="checkout-div">
            {isProduct > 0 ? (
              <div className="checkout-product-div">
                <div className="checkout-price-div">
                  <img src={thumbnail} alt="" style={{width:"3.3rem", borderRadius:"5px"}}/>
                  <div className="checkout-produt-title-div">
                    <span>Fall Limited Edition Sneakers</span>
                    <span>$125.00 × 3 &nbsp;<span style={{fontWeight:700, color:"black"}}>$375.00</span></span>
                  </div>
                  <button className="checkout-delete-btn"><MdDelete size={25}/></button>
                </div>
                <button className="checkout-btn">Checkout</button>
              </div>
            ) : (
              <h5 className="cart-empty-heading">Your cart is empty.</h5>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
