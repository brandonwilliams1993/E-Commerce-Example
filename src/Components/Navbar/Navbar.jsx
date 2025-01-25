import React, {useState} from "react";
import "./Navbar.css";
import header_logo_clear from "../Assets/header_logo_clear.png";
import cart from "../Assets/cart.png";

const Navbar = () => {

    const [menu,setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={header_logo_clear} alt="" />
        <p> </p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("frames")}}>Frames{menu==="frames"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("bars")}}>Bars{menu==="bars"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("seats")}}>Seats{menu==="seats"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
