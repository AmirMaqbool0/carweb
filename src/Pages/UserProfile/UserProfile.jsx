import React from "react";

import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import UserProfilLogoPic from "../../Assests/google.png";
import { UserLisenceBox, UserProfileBox, UserProfileBoxs, UserProfileBtn, UserProfileContaine, UserProfileGender, UserProfileGenderBox, UserProfileInputBox, UserProfileInputs, UserProfileLogoBtn,UserProfileLogo, UserLisenceHeading, UserLisenceHeadingBox, UserLisenceBoxHeading, UserLisenceTextBox, UserLisencebtn } from "./style.js";
const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <UserProfileContaine>
        <UserProfileBox>
          <UserProfileLogoBtn>
            <UserProfileLogo>
              <img src={UserProfilLogoPic} alt="" />
            </UserProfileLogo>
            <UserProfileBtn>
              <button>Upload Picture</button>
            </UserProfileBtn>
          </UserProfileLogoBtn>
          <UserProfileInputs>
            <UserProfileInputBox>
              <span>Full Name</span>
              <input type="text" />
            </UserProfileInputBox>
            <UserProfileInputBox>
              <span>Email</span>
              <input type="text" />
            </UserProfileInputBox>
            <UserProfileInputBox>
              <span>Phone</span>
              <input type="text" />
            </UserProfileInputBox>
            <UserProfileInputBox>
              <span>Post Code</span>
              <input type="text" />
            </UserProfileInputBox>
            <UserProfileInputBox>
              <span>Address</span>
              <input type="text" />
            </UserProfileInputBox>
            <UserProfileInputBox>
              <span>Gender</span>
              <UserProfileGender>
                <UserProfileGenderBox>
                  <span>Male</span>
                  <input type="radio" name="" id="" />
                </UserProfileGenderBox>
                <UserProfileGenderBox>
                  <span>Female</span>
                  <input type="radio" name="" id="" />
                </UserProfileGenderBox>
              </UserProfileGender>
            </UserProfileInputBox>
          </UserProfileInputs>
        </UserProfileBox>
        <UserProfileBoxs>
          <UserLisenceHeading>
            <span>Driving Licence</span>
            <UserLisenceHeadingBox></UserLisenceHeadingBox>
          </UserLisenceHeading>
          <UserLisenceBox>
            <UserLisenceBoxHeading>
              <span>Car Licence Back Image</span>
            </UserLisenceBoxHeading>

            <UserLisenceTextBox>
              <span>
                Upload your licence back image, Supported Formats: JPG, PNG,;
                Max File Size:5MB.
              </span>
            </UserLisenceTextBox>
            <UserLisencebtn>
              <button>Upload Picture</button>
            </UserLisencebtn>
          </UserLisenceBox>
          <UserLisenceBox>
            <UserLisenceBoxHeading>
              <span>Car Licence Back Image</span>
            </UserLisenceBoxHeading>

            <UserLisenceTextBox>
              <span>
                Upload your licence back image, Supported Formats: JPG, PNG,;
                Max File Size:5MB.
              </span>
            </UserLisenceTextBox>
            <UserLisencebtn>
              <button>Upload Picture</button>
            </UserLisencebtn>
          </UserLisenceBox>
        </UserProfileBoxs>
      </UserProfileContaine>
      <Footer />
    </div>
  );
};

export default UserProfile;
