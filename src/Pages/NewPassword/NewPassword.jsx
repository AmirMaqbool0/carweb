import React, { useState } from "react";
import "./style.css";
import NewLogo from "../../Assests/logo.png";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";

const NewPassword = () => {
  const [show, setShow] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassworrd] = useState();
  const changebtn = () => {
    setShow(!show);
  };
  return (
    <div className="newpassword-container">
      <div className="newpassword-box">
        <div className="newpassword-left">
          <img src={NewLogo} alt="" />
        </div>

        <div className="nepassword-right">
          <div className="newpassword-logo">
            <img src={NewLogo} alt="" />
          </div>
          <div className="newpassword-text">
            <h1>Create New Password</h1>
            <span>Please Enter your Password and Confirm Password</span>
          </div>
          <div className="newpassword-inputs">
            <div>
              <span>Password</span>
              <div className="newpassword-input">
                <input
                  type={show == true ? "text" : "password"}
                  placeholder="Enter your password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {show == "true" ? (
                  <Eye onClick={changebtn} />
                ) : (
                  <EyeOff onClick={changebtn} />
                )}
              </div>
            </div>
            <div>
              <span>Confirm Password</span>
              <div className="newpassword-input">
                <input
                  type={show == true ? "text" : "password"}
                  placeholder="Enter your confirm password"
                  onChange={(e) => setConfirmPassworrd(e.target.value)}
                />
                {show == "true" ? (
                  <Eye onClick={changebtn} />
                ) : (
                  <EyeOff onClick={changebtn} />
                )}
              </div>
            </div>
            <div className="newpassword-btn">
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                <button>Continue</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
