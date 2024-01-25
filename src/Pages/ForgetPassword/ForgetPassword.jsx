import React, { useState } from "react";
// import "./style.css";
import ForgetLogo from "../../Assests/logo.png";
import { NavLink } from "react-router-dom";
import { ForgetPasswordContainer,ForgetPasswordBox,ForgetPasswordLeft,ForgetPasswordRight,ForgetPasswordBtn,ForgetPasswordInput,ForgetPasswordText} from "./style.js"; 
const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  return (
    <ForgetPasswordContainer>
      <ForgetPasswordBox>
        <ForgetPasswordLeft>
          <img src={ForgetLogo} alt="" />
        </ForgetPasswordLeft>
        <ForgetPasswordRight>
         <div className="forget-password-logo">
            <img src={ForgetLogo} alt="" />
            </div>
          <ForgetPasswordText>
            <h1>Forget your Account?</h1>
            <span>Please enter your registered email</span>
          </ForgetPasswordText>
          <ForgetPasswordInput>
            <div>
              <span>Email</span>
              <input
                type="text"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <ForgetPasswordBtn>
              <NavLink
                to={"/forgetpasswordotp"}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <button>Continue</button>
              </NavLink>
            </ForgetPasswordBtn>
          </ForgetPasswordInput>
        </ForgetPasswordRight>
      </ForgetPasswordBox>
    </ForgetPasswordContainer>
  );
};

export default ForgetPassword;
