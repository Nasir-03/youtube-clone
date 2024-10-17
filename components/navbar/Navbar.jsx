import React from "react";
import "./Navbar.css";
// import jack from "../../../src/assets/jack.png"
import jack from "../../src/assets/jack.png";
import search from "../../src/assets/search.png";
import { Link, NavLink } from "react-router-dom";

export default function Navbar({ setSidebar, setSetup, setup }) {

  console.log("Setup prop:", setup);

  return (
    <div>
      <div className="navbar-container">
        <div className="logo-part">
          {/* <NavLink to="/" onClick={() => setSidebar((prev) => !prev)} className='nav-link'> */}
            <i className="ri-menu-line menu-bar"
             onClick={() => {
              setSidebar((prev) => !prev);
              setSetup((prev) => !prev);
            }}>
            </i>

          {/* </NavLink> */}
          <NavLink to='/'>
          <i className="ri-youtube-fill" style={{ color: "red" }}></i>
          </NavLink>

          <h1>YouTube</h1>
        </div>
        <div className="search-container">
          {/* <div className="input-container"> */}
          <input type="text" className="search-input" placeholder="Search" />
          <img src={search} alt="" />
          {/* </div> */}
          <button className="mic">
            <i className="ri-mic-fill"></i>
          </button>
        </div>
        <div className="login-part">
          <button className="create">
            <i className="ri-mv-line" style={{ color: "gray" }}></i>
          </button>
          <button className="notification">
            <i className="ri-notification-fill" style={{ color: "gray" }}></i>
          </button>
          <button className="loged" style={{ color: "white" }}>
            <img src={jack} alt="profile" className="profile-picture" />
          </button>
        </div>
      </div>
    </div>
  );
}
