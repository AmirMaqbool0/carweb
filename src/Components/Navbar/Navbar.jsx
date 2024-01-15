import React, { useState } from "react";
import Logo from "../../Assests/logo.png";
import {
  AlignJustify,
  UserRound,
  User,
  LogOut,
  FileStack,
  Heart,
} from "lucide-react";
import "./style.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navcontrol = () => {
    setShowNav(!showNav);
  };
  const showprofile = () => {
    setShowProfile(!showProfile);
  };
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={Logo} alt="" />
      </div>
      <div className={showNav == false ? "nav-link" : "shownav"}>
        <ul>
          <NavLink to={"/"} style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <a href="£"> Home</a>
            </li>
          </NavLink>
          <NavLink to={"/vehiclelist"} style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <a href="$">Vehicle Listing</a>
            </li>
          </NavLink>
          <NavLink to={"/contact"} style={{ textDecoration: "none" }}>
            <li>
              <a href="$">Contact Us</a>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="user">
        <div className="menu-btn">
          <AlignJustify onClick={navcontrol} />
        </div>
        <div className="user-icon">
          <UserRound color="#ffffff" onClick={showprofile} />
        </div>
        <NavLink to={"/login"} style={{ textDecoration: "none" }}>
          {" "}
          <span>Sign in</span>{" "}
        </NavLink>
      </div>
      <div className={showProfile == false ? "hide-profile" : "profile-option"}>
        <div className="profile-card-user-logo-name">
          <div className="profile-card-user-logo">
            <UserRound color="#ffffff" />
          </div>
          <div className="profile-card-user-name">
            <h1>Taimoor A</h1>
            <span>View and Edit you Profile</span>
          </div>
        </div>

        <div className="profile-card-links">
          <div className="profile-card-link">
            <User />
            <NavLink to={"/userprofile"} style={{ textDecoration: "none" }}>
              <span>Profile</span>{" "}
            </NavLink>
          </div>
          <div className="profile-card-link">
            <Heart />
            <NavLink to={"/favriotcars"} style={{ textDecoration: "none" }}>
              <span>Favourite</span>
            </NavLink>
          </div>
          <div className="profile-card-link">
            <FileStack />
            <NavLink to={"/carhistory"} style={{ textDecoration: "none" }}>
              <span>History</span>
            </NavLink>
          </div>
          <div className="profile-card-link">
            <LogOut />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
