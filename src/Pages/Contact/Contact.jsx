import React from "react";
// import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MailOpen, MapPin } from "lucide-react";
import { ContactSection ,ContactBoxLeft,ContactBox,ContactBoxLeftHeadig,ContactBoxText,PersonalBoxRight,PersonalInfoBox,PersonalInfoLogo,PersonalInfoText,PersonalInformation,ContactBoxRight,ContactBoxBtn,ContactBoxInputBox,ContactBoxInputs,ContactMessageBox} from "./style.js";
const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <ContactSection>
        <ContactBox>
          <ContactBoxLeft>
            <ContactBoxLeftHeadig>
              <span>Contact Information</span>
            </ContactBoxLeftHeadig>
            <ContactBoxText>
              <span>
                Fill up the form and our Team will get back to you within 24
                hours.
              </span>
            </ContactBoxText>
            <PersonalInformation>
              <PersonalInfoBox>
                <PersonalInfoLogo></PersonalInfoLogo>
                <PersonalInfoText>
                  <span>+91 98765 43210</span>
                </PersonalInfoText>
              </PersonalInfoBox>

              <PersonalInfoBox>
                <PersonalInfoLogo>
                  <MailOpen size={16} fill="#3563E9" />
                </PersonalInfoLogo>
                <PersonalInfoText>
                  <span>domain@paypal.com</span>
                </PersonalInfoText>
              </PersonalInfoBox>
              <PersonalInfoBox>
                <PersonalInfoLogo></PersonalInfoLogo>
                <PersonalInfoText>
                  <span>https://paypal.com</span>
                </PersonalInfoText>
              </PersonalInfoBox>
              <PersonalInfoBox>
                <PersonalInfoLogo>
                  <MapPin size={16} fill="#3563E9" />
                </PersonalInfoLogo>
                <PersonalInfoText>
                  <span>Location</span>
                </PersonalInfoText>
              </PersonalInfoBox>
            </PersonalInformation>
          </ContactBoxLeft>
          <ContactBoxRight>
            <ContactBoxInputs>
              <ContactBoxInputBox>
                <span>Name</span>
                <input type="text" />
              </ContactBoxInputBox>
              <ContactBoxInputBox>
                <span>Last Name</span>
                <input type="text" />
              </ContactBoxInputBox>
              <ContactBoxInputBox>
                <span>Male</span>
                <input type="text" />
              </ContactBoxInputBox>
              <ContactBoxInputBox>
                <span>Phone</span>
                <input type="number" name="" id="" />
              </ContactBoxInputBox>
            </ContactBoxInputs>
            <ContactMessageBox>
              <span>Message</span>
              <input type="text" />
            </ContactMessageBox>
            <ContactBoxBtn>
              <button>Get a Quote</button>
            </ContactBoxBtn>
          </ContactBoxRight>
        </ContactBox>
      </ContactSection>
      <Footer />
    </div>
  );
};

export default Contact;
