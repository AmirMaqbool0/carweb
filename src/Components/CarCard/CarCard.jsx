import React from "react";
// import "./style.css";
import { Fuel, Heart, Aperture, UsersRound } from "lucide-react";
import CarCardlogopic from "../../Assests/carcard.png";
import { NavLink } from "react-router-dom";
import { CarCardContainer, CarCardLogo, CarCardPrice, CarLikebtn, CarName, CarSpecification, CarSpecificationBox, CardTop, RentBtn, RentPrice } from "./style.js";

const CarCard = () => {
  return (
    <CarCardContainer>
      <CardTop>
        <CarName>
          <h3>Swift</h3>
          <span>Sport</span>
        </CarName>
        <CarLikebtn>
          <Heart />
        </CarLikebtn>
      </CardTop>
      <CarCardLogo>
        <img src={CarCardlogopic} alt="" />
      </CarCardLogo>
      <CarSpecification>
        <CarSpecificationBox>
          <Fuel color=" #90A3BF" />
          <span>90L</span>
        </CarSpecificationBox>
        <CarSpecificationBox>
          <Aperture color=" #90A3BF" />
          <span>Manual</span>
        </CarSpecificationBox>
        <CarSpecificationBox>
          <UsersRound color=" #90A3BF" />
          <span>4 People</span>
        </CarSpecificationBox>
      </CarSpecification>
      <CarCardPrice>
        <RentPrice>
          <span style={{ color: "black" }}>Pkr.</span>
          <h3>3000/</h3>
          <span>Day</span>
        </RentPrice>
        <RentBtn>
          <NavLink to={"/cardetail"} style={{ textDecoration: "none" }}>
            {" "}
            <button>Rent Now</button>
          </NavLink>
        </RentBtn>
      </CarCardPrice>
    </CarCardContainer>
  );
};

export default CarCard;
