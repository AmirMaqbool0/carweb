import React, { useState } from "react";
// import "./style.css";
import { Star, CircleDot, ShieldCheck } from "lucide-react";
import PaymentCardLogo from "../../Assests/detailpic.png";

import { Dropdown } from "primereact/dropdown";
import MC from "../../Assests/mc.png";
import Visa from "../../Assests/visa.png";
import Paypal from "../../Assests/PayPal.png";
import BitCoin from "../../Assests/Bitcoin.png";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { BilingInfo, CarPaymentContainer, CarPaymentLeft, CarPaymentLogo, CarPaymentLogoName, CarPaymentName, CarPaymentNameRating, CarPaymentRating, CarPaymentRight, ConfirmationBox, ConfirmationBtn, CreditLogo, InfoDate, InfoHeading, InfoUpper, PaymentCardHeading, PaymentCardPrice, PaymentCardText, PaymentCardUpper, PaymentDropDown, PaymentInputBox, PaymentInputs, PaymentMethod, PaymentMethodBox, PaymentMethodHeader, PaymentOption, PaymentOptionLogo, PaymentOptionName, PaymentPriceBox, PaymentTotalPrice, PaymentTotaltext, PickUpHeading, PolicyBox, RentalInfo, SaftyMsg } from "./style.js";

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
      <CarPaymentContainer>
        <CarPaymentLeft>
          <BilingInfo>
            <InfoUpper>
              <InfoHeading>
                <h1>Billing Info</h1>
                <span>Please enter your billing info</span>
              </InfoHeading>
              <InfoDate>
                <span>Step 1 of 4</span>
              </InfoDate>
            </InfoUpper>

            <PaymentInputs>
              <PaymentInputBox>
                <span>Name</span>
                <input type="text" />
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Phone Number</span>
                <input type="text" />
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Address</span>
                <input type="text" />
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Town/City</span>
                <input type="text" />
              </PaymentInputBox>
            </PaymentInputs>
          </BilingInfo>

          <RentalInfo>
            <InfoUpper>
              <InfoHeading>
                <h1>Rental Info</h1>
                <span>Please select your rental date</span>
              </InfoHeading>
              <InfoDate>
                <span>Step 2 of 4</span>
              </InfoDate>
            </InfoUpper>
            <PickUpHeading>
              <CircleDot fill="blue" color="white" />
              <span>Pick - Up</span>
            </PickUpHeading>

            <PaymentInputs>
              <PaymentInputBox>
                <span>Location</span>
                <PaymentDropDown>
                 
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className="payment-drop-down"
                  />
                 
                </PaymentDropDown>
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Date</span>
                <input type="date" name="" id="" />
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Time</span>
                <input type="time" name="" id="" />
              </PaymentInputBox>
            </PaymentInputs>

            <PickUpHeading>
              <CircleDot fill="blue" color="white" />
              <span>Drop - Off</span>
            </PickUpHeading>

            <PaymentInputs>
              <PaymentInputBox>
                <span>Location</span>
                <PaymentDropDown>
                  <Dropdown
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.value)}
                    options={cities}
                    optionLabel="name"
                    placeholder="Select a City"
                    className="payment-drop-down"
                  />
                </PaymentDropDown>
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Date</span>
                <input type="date" name="" id="" />
              </PaymentInputBox>

              <PaymentInputBox>
                <span>Time</span>
                <input type="time" name="" id="" />
              </PaymentInputBox>
            </PaymentInputs>
          </RentalInfo>
          <PaymentMethod>
            <InfoUpper>
              <InfoHeading>
                <h1>Payment Method</h1>
                <span>Please enter your payment method</span>
              </InfoHeading>
              <InfoDate>
                <span>Step 3 of 4</span>
              </InfoDate>
            </InfoUpper>
            <PaymentMethodBox>
              <PaymentMethodHeader>
                <PickUpHeading>
                  <CircleDot fill="blue" color="white" />
                  <span>Drop - Off</span>
                </PickUpHeading>
                <CreditLogo>
                  <img src={Visa} alt="" />
                  <img src={MC} alt="" />
                </CreditLogo>
              </PaymentMethodHeader>

              <PaymentInputs>
                <PaymentInputBox>
                  <span>CardNumber</span>
                  <input type="text" style={{ background: "white" }} />
                </PaymentInputBox>

                <PaymentInputBox>
                  <span>Expration Date</span>
                  <input type="text" style={{ background: "white" }} />
                </PaymentInputBox>

                <PaymentInputBox>
                  <span>CardHolder</span>
                  <input type="text" style={{ background: "white" }} />
                </PaymentInputBox>

                <PaymentInputBox>
                  <span>CVC</span>
                  <input type="text" style={{ background: "white" }} />
                </PaymentInputBox>
              </PaymentInputs>
            </PaymentMethodBox>

            <PaymentOption>
              <PaymentOptionName>
                <input type="radio" name="" id="" />
                <span>PayPal</span>
              </PaymentOptionName>
              <PaymentOptionLogo>
                <img src={Paypal} alt="" />
              </PaymentOptionLogo>
            </PaymentOption>
            <PaymentOption>
              <PaymentOptionName>
                <input type="radio" name="" id="" />
                <span>Bitcoin</span>
              </PaymentOptionName>
              <PaymentOptionLogo>
                <img src={BitCoin} alt="" />
              </PaymentOptionLogo>
            </PaymentOption>
          </PaymentMethod>

          <ConfirmationBox>
            <InfoUpper>
              <InfoHeading>
                <h1>Confirmation</h1>
                <span>
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </span>
              </InfoHeading>
              <InfoDate>
                <span>Step 4 of 4</span>
              </InfoDate>
            </InfoUpper>
            <PolicyBox>
              <input type="checkbox" name="" id="" />
              <span>
                I agree with sending an Marketing and newsletter emails. No
                spam, promissed!
              </span>
            </PolicyBox>
            <PolicyBox>
              <input type="checkbox" name="" id="" />
              <span>
                II agree with our terms and conditions and privacy policy.
              </span>
            </PolicyBox>
            <ConfirmationBtn>
              <button>Rent Now</button>
            </ConfirmationBtn>
            <SaftyMsg>
              <ShieldCheck />
              <h1>All your data are safe</h1>
              <span>
                We are using the most advanced security to provide you the best
                experience ever.
              </span>
            </SaftyMsg>
          </ConfirmationBox>
        </CarPaymentLeft>
        <CarPaymentRight>
          <PaymentCardUpper>
            <PaymentCardHeading>
              <span>Rental Summary</span>
            </PaymentCardHeading>
            <PaymentCardText>
              <span>
                Prices may change depending on the length of the rental and the
                price of your rental car.
              </span>
            </PaymentCardText>
          </PaymentCardUpper>
          <CarPaymentLogoName>
            <CarPaymentLogo>
              <img src={PaymentCardLogo} alt="" />
            </CarPaymentLogo>
            <CarPaymentNameRating>
              <CarPaymentName>
                <span>Nissan GT - R</span>
              </CarPaymentName>
              <CarPaymentRating>
                <div>
                  {Array(5)
                    .fill()
                    .map((item, i) => (
                      <Star fill="yellow" size={16} />
                    ))}
                </div>
                <span>440+ Reviewer</span>
              </CarPaymentRating>
            </CarPaymentNameRating>
          </CarPaymentLogoName>
          <PaymentCardPrice>
            <PaymentPriceBox>
              <h2>Subtotal</h2>
              <span>$80.00</span>
            </PaymentPriceBox>
            <PaymentPriceBox>
              <h2>Tax</h2>
              <span>0</span>
            </PaymentPriceBox>
            <PaymentTotalPrice>
              <PaymentTotaltext>
                <h1>Total Rental Price</h1>
                <h3>Overall price and includes rental discount</h3>
              </PaymentTotaltext>
              <span>$80.00</span>
            </PaymentTotalPrice>
          </PaymentCardPrice>
        </CarPaymentRight>
      </CarPaymentContainer>
      <Footer />
    </div>
  );
};

export default CarPayment;
