import React, { useState } from "react";
// import "./style.css";
import NewLogo from "../../Assests/logo.png";
import { Eye, EyeOff } from "lucide-react";
import { NavLink } from "react-router-dom";
import { NewPasswordContainer,NewPasswordBox,NewPasswordLeft,NewPasswordRight,NewPasswordText,NewPasswordBtn,NewPasswordInput,NewPasswordInputs } from "./style.js";
const NewPassword = () => {
  const [show, setShow] = useState(false);
  const [newPassword, setNewPassword] = useState();
  const [confirmPassword, setConfirmPassworrd] = useState();
  const changebtn = () => {
    setShow(!show);
  };
  return (
    <NewPasswordContainer>
      <NewPasswordBox>
        <NewPasswordLeft>
          <img src={NewLogo} alt="" />
        </NewPasswordLeft>

        <NewPasswordRight>
          <div className="newpassword-logo">
            <img src={NewLogo} alt="" />
          </div>
          <NewPasswordText>
            <h1>Create New Password</h1>
            <span>Please Enter your Password and Confirm Password</span>
          </NewPasswordText>
          <NewPasswordInputs>
            <div>
              <span>Password</span>
              <NewPasswordInput>
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
                 </NewPasswordInput>
              </div>
           
            <div>
              <span>Confirm Password</span>
              <NewPasswordInput>
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
              </NewPasswordInput>
            </div>
            <NewPasswordBtn>
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                <button>Continue</button>
              </NavLink>
            </NewPasswordBtn>
          </NewPasswordInputs>
        </NewPasswordRight>
      </NewPasswordBox>
    </NewPasswordContainer>
  );
};

export default NewPassword;
