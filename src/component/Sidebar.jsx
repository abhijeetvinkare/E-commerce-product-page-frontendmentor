import React from 'react'
import "./Sidebar.css"
import { IoCartOutline } from "react-icons/io5";
import avatar from "../assets/images/image-avatar.png"

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <h1>sneakers</h1>
        </div>
        <div className='nav-items'>
            <ul className='nav-list'>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='cart-profile-div'>
            <button className="btn"><IoCartOutline size={28}/></button>
            <button className="btn"><img className='avatar-img' src={avatar} alt="" /></button>
        </div>
    </div>
  )
}

export default Sidebar