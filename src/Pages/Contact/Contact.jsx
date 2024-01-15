import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { MailOpen, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container">
      <Navbar />
      <div className="contact-section">
        <div className="contact-box">
          <div className="contact-box-left">
            <div className="contact-box-left-heading">
              <span>Contact Information</span>
            </div>
            <div className="contact-box-text">
              <span>
                Fill up the form and our Team will get back to you within 24
                hours.
              </span>
            </div>
            <div className="personal-information">
              <div className="personal-info-box">
                <div className="personal-onfo-logo"></div>
                <div className="personal-info-text">
                  <span>+91 98765 43210</span>
                </div>
              </div>

              <div className="personal-info-box">
                <div className="personal-onfo-logo">
                  <MailOpen size={16} fill="#3563E9" />
                </div>
                <div className="personal-info-text">
                  <span>domain@paypal.com</span>
                </div>
              </div>
              <div className="personal-info-box">
                <div className="personal-onfo-logo"></div>
                <div className="personal-info-text">
                  <span>https://paypal.com</span>
                </div>
              </div>
              <div className="personal-info-box">
                <div className="personal-onfo-logo">
                  <MapPin size={16} fill="#3563E9" />
                </div>
                <div className="personal-info-text">
                  <span>Location</span>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-box-right">
            <div className="contact-box-inputs">
              <div className="contact-box-input-box">
                <span>Name</span>
                <input type="text" />
              </div>
              <div className="contact-box-input-box">
                <span>Last Name</span>
                <input type="text" />
              </div>
              <div className="contact-box-input-box">
                <span>Male</span>
                <input type="text" />
              </div>
              <div className="contact-box-input-box">
                <span>Phone</span>
                <input type="number" name="" id="" />
              </div>
            </div>
            <div className="contact-message-box">
              <span>Message</span>
              <input type="text" />
            </div>
            <div className="contact-box-btn">
              <button>Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
