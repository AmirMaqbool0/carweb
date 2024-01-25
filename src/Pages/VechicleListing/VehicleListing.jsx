import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import CarCard from "../../Components/CarCard/CarCard";
import Footer from "../../Components/Footer/Footer";
import { Condition, ConditionBox, ConditionBoxes, ConditionHeading, DropDownBtn, Fule, FuleBox, FuleBoxes, FuleHeading, MinMaxRange, PriceRange, PriceRangeHeading, PriceRangeMeter, PriceRangeMeterBar, PriceRangeMeterText, Right, VehicleContainer, VehicleListBox, VehicleListBtn, VehicleListLeft } from "./style";
const VehicleListing = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  return (
    <VehicleContainer>
      <Navbar />
      <VehicleListBox>
        <VehicleListLeft>
          <div className="maker">
            <span>Make</span>
            <DropDownBtn>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="dropdown"
              />
            </DropDownBtn>
          </div>
          <div className="model">
            <span>Model</span>
            <DropDownBtn>
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="dropdown"
              />
            </DropDownBtn>
          </div>
          <PriceRange>
            <PriceRangeHeading>
              <h1>Price Range per Day (pkr)</h1>
              <span>50,000</span>
            </PriceRangeHeading>
            <PriceRangeMeter>
              <PriceRangeMeterText>
                <span>50,000</span>
                <span>500M</span>
              </PriceRangeMeterText>
              <PriceRangeMeterBar>
                <span></span>
                <h3></h3>
                <span></span>
              </PriceRangeMeterBar>
              <MinMaxRange>
                <span>Minimum range 50,000 Rs</span>
                <span>Maximium range 500M Rs</span>
              </MinMaxRange>
            </PriceRangeMeter>
            <div className="registration-city">
              <span>Registration City</span>
              <DropDownBtn>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="dropdown"
                />
              </DropDownBtn>
            </div>

            <div className="car-documents">
              <span>Car Document</span>
              <DropDownBtn>
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="dropdown"
                />
              </DropDownBtn>
            </div>

            <Condition>
              <ConditionHeading>
                <span>Condition</span>
              </ConditionHeading>
              <ConditionBoxes>
                <ConditionBox>
                  <span>New</span>
                </ConditionBox>
                <ConditionBox>
                  <span>Used</span>
                </ConditionBox>
              </ConditionBoxes>
            </Condition>
            <Fule>
              <FuleHeading>
                <span>Fule</span>
              </FuleHeading>
              <FuleBoxes>
                <FuleBox>
                  <span>Petrol</span>
                </FuleBox>
                <FuleBox>
                  <span>Diesel</span>
                </FuleBox>
                <FuleBox>
                  <span>LPG</span>
                </FuleBox>
                <FuleBox>
                  <span>CNG</span>
                </FuleBox>
                <FuleBox>
                  <span>Electric</span>
                </FuleBox>
                <FuleBox>
                  <span>Hybrid</span>
                </FuleBox>
              </FuleBoxes>
            </Fule>
            <VehicleListBtn>
              <span>Apply</span>
            </VehicleListBtn>
          </PriceRange>
        </VehicleListLeft>
        <Right>
          {Array(9)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </Right>
      </VehicleListBox>
      <Footer />
    </VehicleContainer>
  );
};

export default VehicleListing;
