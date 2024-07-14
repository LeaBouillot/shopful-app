import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";


const Navbar = () => {
  //applique <hr/> si on click menu
  // const [menu,setMenu] = useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" width={70} />
        <p>ShopFul</p>
      </div>

      <ul className="nav-menu">
        <li>Shop</li>
        <li>Women</li>
        <li>Men</li>
        <li>Kids</li>
  
      </ul>
      <div className="nav-login-cart">
      <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;