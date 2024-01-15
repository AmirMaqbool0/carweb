import React from "react";
import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HistoryCarCard from "../../Components/HistoryCarCard/HistoryCarCard";
const CarHistory = () => {
  return (
    <div className="car-history-container">
      <Navbar />
      <div className="car-history-box">
        <div className="car-history-heading">
          <h1>History</h1>
          <span>Here you can see the history of rent cars that you used</span>
        </div>
        <div className="history-car-card-section">
          {Array(3)
            .fill()
            .map((item, i) => (
              <HistoryCarCard />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarHistory;
