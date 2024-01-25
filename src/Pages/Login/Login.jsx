import React, { useState } from "react";
// import "./style.css";
import LoginLogo from "../../Assests/logo.png";
import Google from "../../Assests/google.png";
import Apple from "../../Assests/apple.png";
import Facebook from "../../Assests/facebook.svg";
import { NavLink } from "react-router-dom";
import { LogInContainer,Left,Right,LoginBox,LoginBoxText,LoginBoxInputBox,LoginBoxInputs, ForgetPassword,ForgetPasswordCheckBox,ForgetPasswordLink,LoginPageLoginBtn, OtherLoginOption, AskSignUp, Or, OtherOptionBox, OtherOptionBoxLogo} from "./style.js";
const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <LogInContainer>
      <Left>
        <img src={LoginLogo} alt="" />
      </Left>
      <Right>
        <LoginBox>
          <div className="login-box-logo">
            <img src={LoginLogo} alt="" />
          </div>
          <LoginBoxText>
            <h1>Login to your Account</h1>
            <span>Welcome back! please enter your detail</span>
          </LoginBoxText>
          <LoginBoxInputs>
            <LoginBoxInputBox>
              <span>Email</span>
              <input type="text" placeholder="Emai" />
            </LoginBoxInputBox>
            <LoginBoxInputBox>
              <span>Password</span>
              <input
                type={show == true ? "text" : "password"}
                placeholder="Password"
              />
            </LoginBoxInputBox>
            <ForgetPassword>
              <ForgetPasswordCheckBox>
                <input type="checkbox" name="" id="" />
                <span>Remember me</span>
              </ForgetPasswordCheckBox>
              <ForgetPasswordLink>
                <NavLink
                  to={"/forgetpassword"}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  <span>Forgot Password?</span>
                </NavLink>
              </ForgetPasswordLink>
            </ForgetPassword>
            <LoginPageLoginBtn>
              <NavLink to={"/"} style={{ textDecoration: "none" }}>
                {" "}
                <button>Login</button>
              </NavLink>
            </LoginPageLoginBtn>
          </LoginBoxInputs>
          <OtherLoginOption>
            <AskSignUp>
              <span>Dont have an account?</span>
              <NavLink to={"/signin"} style={{ textDecoration: "none" }}>
                <a href="$"> Sign Up</a>
              </NavLink>
            </AskSignUp>
            <Or>
              <span>Or</span>
            </Or>
            <OtherLoginOption>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Google} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Google</span>
                </div>
              </OtherOptionBox>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Facebook} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Facebook</span>
                </div>
              </OtherOptionBox>
              <OtherOptionBox>
                <OtherOptionBoxLogo>
                  <img src={Apple} alt="" />
                </OtherOptionBoxLogo>
                <div className="other-option-box-text">
                  <span>Sign in with Apple</span>
                </div>
              </OtherOptionBox>
            </OtherLoginOption>
          </OtherLoginOption>
        </LoginBox>
      </Right>
    </LogInContainer>
  );
};

export default Login;
