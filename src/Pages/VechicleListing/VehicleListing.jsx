import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import "./style.css";
import Navbar from "../../Components/Navbar/Navbar";
import CarCard from "../../Components/CarCard/CarCard";
import Footer from "../../Components/Footer/Footer";
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
    <div className="vehicle-container">
      <Navbar />
      <div className="vehiclelist-box">
        <div className="vehiclelist-left">
          <div className="maker">
            <span>Make</span>
            <div className="drop-down-box">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="dropdown"
              />
            </div>
          </div>
          <div className="model">
            <span>Model</span>
            <div className="drop-down-box">
              <Dropdown
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.value)}
                options={cities}
                optionLabel="name"
                placeholder="Select a City"
                className="dropdown"
              />
            </div>
          </div>
          <div className="price-range">
            <div className="price-range-heading">
              <h1>Price Range per Day (pkr)</h1>
              <span>50,000</span>
            </div>
            <div className="price-range-meter">
              <div className="price-range-meter-text">
                <span>50,000</span>
                <span>500M</span>
              </div>
              <div className="price-range-meter-bar">
                <span></span>
                <h3></h3>
                <span></span>
              </div>
              <div className="min-max-range">
                <span>Minimum range 50,000 Rs</span>
                <span>Maximium range 500M Rs</span>
              </div>
            </div>
            <div className="registration-city">
              <span>Registration City</span>
              <div className="drop-down-box">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="dropdown"
                />
              </div>
            </div>

            <div className="car-documents">
              <span>Car Document</span>
              <div className="drop-down-box">
                <Dropdown
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.value)}
                  options={cities}
                  optionLabel="name"
                  placeholder="Select a City"
                  className="dropdown"
                />
              </div>
            </div>

            <div className="condition">
              <div className="condition-heading">
                <span>Condition</span>
              </div>
              <div className="condition-boxes">
                <div className="condition-box">
                  <span>New</span>
                </div>
                <div className="condition-box">
                  <span>Used</span>
                </div>
              </div>
            </div>
            <div className="fule">
              <div className="fule-heading">
                <span>Fule</span>
              </div>
              <div className="fule-boxes">
                <div className="fule-box">
                  <span>Petrol</span>
                </div>
                <div className="fule-box">
                  <span>Diesel</span>
                </div>
                <div className="fule-box">
                  <span>LPG</span>
                </div>
                <div className="fule-box">
                  <span>CNG</span>
                </div>
                <div className="fule-box">
                  <span>Electric</span>
                </div>
                <div className="fule-box">
                  <span>Hybrid</span>
                </div>
              </div>
            </div>
            <div className="vehicle-list-btn">
              <span>Apply</span>
            </div>
          </div>
        </div>
        <div className="vehiclelist-right">
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

export default VehicleListing;
