import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import UserProfilLogo from "../../Assests/google.png";
const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <div className="user-profile-container">
        <div className="user-profile-box">
          <div className="user-profile-logo-btn">
            <div className="user-profile-logo">
              <img src={UserProfilLogo} alt="" />
            </div>
            <div className="user-profile-btn">
              <button>Upload Picture</button>
            </div>
          </div>
          <div className="user-profile-inputs">
            <div className="user-profile-input-box">
              <span>Full Name</span>
              <input type="text" />
            </div>
            <div className="user-profile-input-box">
              <span>Email</span>
              <input type="text" />
            </div>
            <div className="user-profile-input-box">
              <span>Phone</span>
              <input type="text" />
            </div>
            <div className="user-profile-input-box">
              <span>Post Code</span>
              <input type="text" />
            </div>
            <div className="user-profile-input-box">
              <span>Address</span>
              <input type="text" />
            </div>
            <div className="user-profile-input-box">
              <span>Gender</span>
              <div className="user-profile-gender">
                <div className="user-profile-gender-box">
                  <span>Male</span>
                  <input type="radio" name="" id="" />
                </div>
                <div className="user-profile-gender-box">
                  <span>Female</span>
                  <input type="radio" name="" id="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="user-licence-boxs">
          <div className="user-licence-heading">
            <span>Driving Licence</span>
            <div className="user-licence-heading-box"></div>
          </div>
          <div className="user-licence-box">
            <div className="user-licence-box-heading">
              <span>Car Licence Back Image</span>
            </div>

            <div className="user-licence-text-box">
              <span>
                Upload your licence back image, Supported Formats: JPG, PNG,;
                Max File Size:5MB.
              </span>
            </div>
            <div className="user-licence-btn">
              <button>Upload Picture</button>
            </div>
          </div>
          <div className="user-licence-box">
            <div className="user-licence-box-heading">
              <span>Car Licence Back Image</span>
            </div>

            <div className="user-licence-text-box">
              <span>
                Upload your licence back image, Supported Formats: JPG, PNG,;
                Max File Size:5MB.
              </span>
            </div>
            <div className="user-licence-btn">
              <button>Upload Picture</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
