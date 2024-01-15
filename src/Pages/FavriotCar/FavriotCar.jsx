import React from "react";
import "./style.css";
import CarCard from "../../Components/CarCard/CarCard";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
const FavriotCar = () => {
  return (
    <div>
      <Navbar />
      <div className="favriot-container">
        <div className="favriot-card-header">
          <span>Favourite</span>
        </div>
        <div className="favriot-cards">
          {Array(9)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FavriotCar;
