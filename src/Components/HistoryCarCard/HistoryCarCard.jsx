import React, { useState } from "react";
// import "./style.css";

import CarHistory from "../../Assests/carcard.png";
import { Radar, Fuel, UserRound, Star } from "lucide-react";
import { CarHistoryDay, CarHistoryDrop, CarHistoryPickUp, CarHistoryPickUpDrop, HistoryCarCardContainer, HistoryCarCardHeader, HistoryCardBtn, HistoryCardLogo, HistoryCardName, HistoryCardPrice, HistoryCardPriceHeading, HistoryCardPriceValue, HistoryCardRow2, HistoryCardSpecification, HistoryCardSpecificationBox, PopUpBox, PopUpBoxBtn, PopUpBoxHeading, PopUpBoxMessage, PopUpBoxRating, PopUpContainer, Row3 } from "./style.js";
const HistoryCarCard = () => {
  const [popUp, setPopUp] = useState(false);
  const showpopup = () => {
    setPopUp(!popUp);
  };
  return (
    <HistoryCarCardContainer>
      <HistoryCarCardHeader>
        <HistoryCardName>
          <h1>Nissan GT - R</h1>
          <span>sport</span>
        </HistoryCardName>
        <HistoryCardBtn>
          <span>Cencel</span>
          <button onClick={showpopup}>Return</button>
        </HistoryCardBtn>
      </HistoryCarCardHeader>
      <HistoryCardRow2>
        <HistoryCardLogo>
          <img src={CarHistory} alt="" />
        </HistoryCardLogo>
        <CarHistoryPickUpDrop>
          <CarHistoryPickUp>
            <h1>London Bridge</h1>
            <span>Pickup point</span>
          </CarHistoryPickUp>
          <CarHistoryDrop>
            <h1>London Bridge</h1>
            <span>Pickup point</span>
          </CarHistoryDrop>
        </CarHistoryPickUpDrop>
        <CarHistoryDay>
          <span>4 days</span>
        </CarHistoryDay>
      </HistoryCardRow2>
      <Row3>
        <HistoryCardSpecification>
          <HistoryCardSpecificationBox>
            <Fuel />
            <span>80L</span>
          </HistoryCardSpecificationBox>
          <HistoryCardSpecificationBox>
            <Radar />
            <span>Manual</span>
          </HistoryCardSpecificationBox>
          <HistoryCardSpecificationBox>
            <UserRound />
            <span>2 People</span>
          </HistoryCardSpecificationBox>
        </HistoryCardSpecification>
        <HistoryCardPrice>
          <HistoryCardPriceHeading>
            <span>Price</span>
          </HistoryCardPriceHeading>
          <HistoryCardPriceValue>
            <h1>$99.00</h1>
            <span>/day</span>
          </HistoryCardPriceValue>
        </HistoryCardPrice>
      </Row3>
      {popUp && (
        <PopUpContainer>
          <PopUpBox>
            <PopUpBoxHeading>
              <h1>Thank you!</h1>
              <span>Please rate your trip</span>
            </PopUpBoxHeading>
            <PopUpBoxRating>
              {Array(5)
                .fill()
                .map((item, i) => (
                  <Star fill="yellow" />
                ))}
            </PopUpBoxRating>
            <PopUpBoxMessage>
              <input type="text" placeholder="Message" />
            </PopUpBoxMessage>
            <PopUpBoxBtn>
              <button onClick={showpopup}>Send</button>
            </PopUpBoxBtn>
          </PopUpBox>
        </PopUpContainer>
      )}
    </HistoryCarCardContainer>
  );
};

export default HistoryCarCard;
