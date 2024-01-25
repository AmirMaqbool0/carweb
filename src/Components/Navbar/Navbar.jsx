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
// import "./style.css";
import { NavLink } from "react-router-dom";
import { MenuBtn, NavbarContainer, ProfileCardLink, ProfileCardLinks, ProfileCardUserLogo, ProfileCardUserLogoName, ProfileCardUserName, User1, UserIcon,MainHideShow,NavBarMain, NavbarLogo } from "./style.js";

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
    <NavbarContainer>
      <NavbarLogo>
        <img src={Logo} alt="" />
      </NavbarLogo>
      <NavBarMain nav={showNav == false ? "nav-link" : "shownav"}>
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
      </NavBarMain>
      <User1>
        <MenuBtn>
          <AlignJustify onClick={navcontrol} />
        </MenuBtn>
        <UserIcon>
          <UserRound color="#ffffff" onClick={showprofile} />
        </UserIcon>
        <NavLink to={"/login"} style={{ textDecoration: "none" }}>
          {" "}
          <span>Sign in</span>{" "}
        </NavLink>
      </User1>
      <MainHideShow option={showProfile == false ? "hide-profile" : "profile-option"}>
        <ProfileCardUserLogoName>
          <ProfileCardUserLogo>
            <UserRound color="#ffffff" />
          </ProfileCardUserLogo>
          <ProfileCardUserName>
            <h1>Taimoor A</h1>
            <span>View and Edit you Profile</span>
          </ProfileCardUserName>
        </ProfileCardUserLogoName>

        <ProfileCardLinks>
          <ProfileCardLink>
            <User />
            <NavLink to={"/userprofile"} style={{ textDecoration: "none" }}>
              <span>Profile</span>{" "}
            </NavLink>
          </ProfileCardLink>
          <ProfileCardLink>
            <Heart />
            <NavLink to={"/favriotcars"} style={{ textDecoration: "none" }}>
              <span>Favourite</span>
            </NavLink>
          </ProfileCardLink>
          <ProfileCardLink>
            <FileStack />
            <NavLink to={"/carhistory"} style={{ textDecoration: "none" }}>
              <span>History</span>
            </NavLink>
          </ProfileCardLink>
          <ProfileCardLink>
            <LogOut />
            <span>Logout</span>
          </ProfileCardLink>
        </ProfileCardLinks>
      </MainHideShow>
    </NavbarContainer>
  );
};

export default Navbar;
