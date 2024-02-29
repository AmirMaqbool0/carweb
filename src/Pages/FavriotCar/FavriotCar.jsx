import React from "react";
import CarCard from "../../Components/CarCard/CarCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { FavriotContainer,FavriotCardHeader,FavriotCards } from "./style.js";
const FavriotCar = () => {
  return (
    <div>
      <Navbar />
      <FavriotContainer>
        <FavriotCardHeader>
          <span>Favourite</span>
        </FavriotCardHeader>
        <FavriotCards>
          {Array(9)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </FavriotCards>
      </FavriotContainer>
      <Footer />
    </div>
  );
};

export default FavriotCar;
