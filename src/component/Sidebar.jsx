import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { IoCartOutline } from "react-icons/io5";
import avatar from "../assets/images/image-avatar.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import scrollLock from "scroll-lock";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navToggle = isOpen ? (
    <IoClose size={30} onClick={toggleSidebar} className="icons"/>
  ) : (
    <GiHamburgerMenu size={25} onClick={toggleSidebar} className="icons"/>
  );

  // Enable/disable scrolling when the sidebar opens/closes
  useEffect(() => {
    if (isOpen) {
      scrollLock.disablePageScroll();
    } else {
      scrollLock.enablePageScroll();
    }
  }, [isOpen]);

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
        <button className="btn">
          <IoCartOutline size={28} className="icons"/>
        </button>
        <button className="btn">
          <img className="avatar-img" src={avatar} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
