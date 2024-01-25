import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import HistoryCarCard from "../../Components/HistoryCarCard/HistoryCarCard";
import {CarHistoryContainer,CarHistoryBox,CarHistoryHeading,HisoryCarCardSection} from './style.js'
const CarHistory = () => {
  return (
    <CarHistoryContainer>
      <Navbar />
      <CarHistoryBox>
        <CarHistoryHeading>
          <h1>History</h1>
          <span>Here you can see the history of rent cars that you used</span>
        </CarHistoryHeading>
        <HisoryCarCardSection>
          {Array(3)
            .fill()
            .map((item, i) => (
              <HistoryCarCard />
            ))}
        </HisoryCarCardSection>
      </CarHistoryBox>
      <Footer />
    </CarHistoryContainer>
  );
};

export default CarHistory;
