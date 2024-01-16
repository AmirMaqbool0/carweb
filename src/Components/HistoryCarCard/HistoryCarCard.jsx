import React, { useState } from "react";
import "./style.css";

import CarHistory from "../../Assests/carcard.png";
import { Radar, Fuel, UserRound, Star } from "lucide-react";
const HistoryCarCard = () => {
  const [popUp, setPopUp] = useState(false);
  const showpopup = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="history-car-card-container">
      <div className="history-car-card-header">
        <div className="history-card-name">
          <h1>Nissan GT - R</h1>
          <span>sport</span>
        </div>
        <div className="history-card-btn">
          <span>Cencel</span>
          <button onClick={showpopup}>Return</button>
        </div>
      </div>
      <div className="history-card-row2">
        <div className="history-card-logo">
          <img src={CarHistory} alt="" />
        </div>
        <div className="car-history-pickup-drop">
          <div className="car-history-pickup">
            <h1>London Bridge</h1>
            <span>Pickup point</span>
          </div>
          <div className="car-history-drop">
            <h1>London Bridge</h1>
            <span>Pickup point</span>
          </div>
        </div>
        <div className="car-history-day">
          <span>4 days</span>
        </div>
      </div>
      <div className="row-3">
        <div className="history-card-specification">
          <div className="history-card-specification-box">
            <Fuel />
            <span>80L</span>
          </div>
          <div className="history-card-specification-box">
            <Radar />
            <span>Manual</span>
          </div>
          <div className="history-card-specification-box">
            <UserRound />
            <span>2 People</span>
          </div>
        </div>
        <div className="history-card-price">
          <div className="history-card-price-heading">
            <span>Price</span>
          </div>
          <div className="history-card-price-value">
            <h1>$99.00</h1>
            <span>/day</span>
          </div>
        </div>
      </div>
      {popUp && (
        <div className="pop-up-container">
          <div className="pop-up-box">
            <div className="pop-up-box-heading">
              <h1>Thank you!</h1>
              <span>Please rate your trip</span>
            </div>
            <div className="pop-up-box-rating">
              {Array(5)
                .fill()
                .map((item, i) => (
                  <Star fill="yellow" />
                ))}
            </div>
            <div className="pop-up-box-message">
              <input type="text" placeholder="Message" />
            </div>
            <div className="pop-up-btn">
              <button onClick={showpopup}>Send</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoryCarCard;
