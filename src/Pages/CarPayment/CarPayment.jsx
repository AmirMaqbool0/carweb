import React, { useState } from "react";
import "./style.css";
import { Star, CircleDot, ShieldCheck } from "lucide-react";
import PaymentCardLogo from "../../Assests/detailpic.png";

import { Dropdown } from "primereact/dropdown";
import MC from "../../Assests/mc.png";
import Visa from "../../Assests/visa.png";
import Paypal from "../../Assests/PayPal.png";
import BitCoin from "../../Assests/Bitcoin.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const CarPayment = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <div>
      <Navbar />
      <div className="crapayment-container">
        <div className="car-payment-left">
          <div className="billing-info">
            <div className="info-upper">
              <div className="info-heading">
                <h1>Billing Info</h1>
                <span>Please enter your billing info</span>
              </div>
              <div className="info-date">
                <span>Step 1 of 4</span>
              </div>
            </div>

            <div className="payment-inputs">
              <div className="payment-input-box">
                <span>Name</span>
                <input type="text" />
              </div>

              <div className="payment-input-box">
                <span>Phone Number</span>
                <input type="text" />
              </div>

              <div className="payment-input-box">
                <span>Address</span>
                <input type="text" />
              </div>

              <div className="payment-input-box">
                <span>Town/City</span>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="rentel-info">
            <div className="info-upper">
              <div className="info-heading">
                <h1>Rental Info</h1>
                <span>Please select your rental date</span>
              </div>
              <div className="info-date">
                <span>Step 2 of 4</span>
              </div>
            </div>
            <div className="pick-up-heading">
              <CircleDot fill="blue" color="white" />
              <span>Pick - Up</span>
            </div>

            <div className="payment-inputs">
              <div className="payment-input-box">
                <span>Location</span>
                <div className="">
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className="payment-drop-down"
                  />
                </div>
              </div>

              <div className="payment-input-box">
                <span>Date</span>
                <input type="date" name="" id="" />
              </div>

              <div className="payment-input-box">
                <span>Time</span>
                <input type="time" name="" id="" />
              </div>
            </div>

            <div className="pick-up-heading">
              <CircleDot fill="blue" color="white" />
              <span>Drop - Off</span>
            </div>

            <div className="payment-inputs">
              <div className="payment-input-box">
                <span>Location</span>
                <div className="">
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className="payment-drop-down"
                  />
                </div>
              </div>

              <div className="payment-input-box">
                <span>Date</span>
                <input type="date" name="" id="" />
              </div>

              <div className="payment-input-box">
                <span>Time</span>
                <input type="time" name="" id="" />
              </div>
            </div>
          </div>
          <div className="payment-method">
            <div className="info-upper">
              <div className="info-heading">
                <h1>Payment Method</h1>
                <span>Please enter your payment method</span>
              </div>
              <div className="info-date">
                <span>Step 3 of 4</span>
              </div>
            </div>
            <div className="payment-method-box">
              <div className="payment-method-header">
                <div className="pick-up-heading">
                  <CircleDot fill="blue" color="white" />
                  <span>Drop - Off</span>
                </div>
                <div className="credit-logo">
                  <img src={Visa} alt="" />
                  <img src={MC} alt="" />
                </div>
              </div>

              <div className="payment-inputs">
                <div className="payment-input-box">
                  <span>CardNumber</span>
                  <input type="text" style={{ background: "white" }} />
                </div>

                <div className="payment-input-box">
                  <span>Expration Date</span>
                  <input type="text" style={{ background: "white" }} />
                </div>

                <div className="payment-input-box">
                  <span>CardHolder</span>
                  <input type="text" style={{ background: "white" }} />
                </div>

                <div className="payment-input-box">
                  <span>CVC</span>
                  <input type="text" style={{ background: "white" }} />
                </div>
              </div>
            </div>

            <div className="payment-option">
              <div className="payment-option-name">
                <input type="radio" name="" id="" />
                <span>PayPal</span>
              </div>
              <div className="payment-option-logo">
                <img src={Paypal} alt="" />
              </div>
            </div>
            <div className="payment-option">
              <div className="payment-option-name">
                <input type="radio" name="" id="" />
                <span>Bitcoin</span>
              </div>
              <div className="payment-option-logo">
                <img src={BitCoin} alt="" />
              </div>
            </div>
          </div>

          <div className="confirmation-box">
            <div className="info-upper">
              <div className="info-heading">
                <h1>Confirmation</h1>
                <span>
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </span>
              </div>
              <div className="info-date">
                <span>Step 4 of 4</span>
              </div>
            </div>
            <div className="policy-box">
              <input type="checkbox" name="" id="" />
              <span>
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </span>
            </div>
            <div className="policy-box">
              <input type="checkbox" name="" id="" />
              <span>
                II agree with our terms and conditions and privacy policy.
              </span>
            </div>
            <div className="confirmation-btn">
              <button>Rent Now</button>
            </div>
            <div className="safty-msg">
              <ShieldCheck />
              <h1>All your data are safe</h1>
              <span>
                We are using the most advanced security to provide you the best
                experience ever.
              </span>
            </div>
          </div>
        </div>
        <div className="car-payment-right">
          <div className="payment-card-upper">
            <div className="payment-card-heading">
              <span>Rental Summary</span>
            </div>
            <div className="payment-card-text">
              <span>
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </span>
            </div>
          </div>
          <div className="carpayment-logo-name">
            <div className="carpayment-logo">
              <img src={PaymentCardLogo} alt="" />
            </div>
            <div className="carpayment-name-rating">
              <div className="car-payment-name">
                <span>Nissan GT - R</span>
              </div>
              <div className="carpayment-rating">
                <div>
                  {Array(5)
                    .fill()
                    .map((item, i) => (
                      <Star fill="yellow" size={16} />
                    ))}
                </div>
                <span>440+ Reviewer</span>
              </div>
            </div>
          </div>
          <div className="payment-card-price">
            <div className="payment-price-box">
              <h2>Subtotal</h2>
              <span>$80.00</span>
            </div>
            <div className="payment-price-box">
              <h2>Tax</h2>
              <span>0</span>
            </div>
            <div className="payment-total-price">
              <div className="payment-total-text">
                <h1>Total Rental Price</h1>
                <h3>Overall price and includes rental discount</h3>
              </div>
              <span>$80.00</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarPayment;
