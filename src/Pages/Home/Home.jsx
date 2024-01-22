import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./style.css";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import Discription from "../../Components/Discription/Discription";
import CarCard from "../../Components/CarCard/CarCard";
import { Briefcase } from "lucide-react";
import Footer from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import Vector from '../../Assests/Vector.png'
import Subscribe from '../../Assests/subscribe.jpg'
import {HomeContainer,CarCards,CarCardsTop,CarCardBoxeses,ServicesSection,ServicesBox,ServicesHeading,ServicesCards,ServicesCard,ServicesCardLogo,ServiceCardHeading,ServiceCardText,SubscribeSection,SubscribeContainer,SubscribeText,SubscribeInput,SubscribeInputText,SubscribeInputBox}  from './style.js'

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <HomeBanner />
      <Discription />
      <CarCards>
        <CarCardsTop>
          <span>Popular Car</span>
          <span>
            <NavLink to={"/vehiclelist"}>
              {" "}
              <a href="$">View All</a>
            </NavLink>
          </span>
        </CarCardsTop>
        <CarCardBoxeses>
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </CarCardBoxeses>
      </CarCards>
      <ServicesSection>
        <ServicesBox>
          <ServicesHeading>
            <h3>Fell the best experience with our luxury car</h3>
          </ServicesHeading>
          <ServicesCards>
            {
              Array(3).fill().map((item,i)=>
              <ServicesCard>
              <ServicesCardLogo imgurl={Vector}>
                <Briefcase size={40} color="#ffffff" />
              </ServicesCardLogo>
              <ServiceCardHeading>
                <h3>Book with flexibility</h3>
              </ServiceCardHeading>
              <ServiceCardText>
                <span>Easily find car and book with no change fees.</span>
              </ServiceCardText>
            </ServicesCard>
              )
            }
          
          </ServicesCards>
        </ServicesBox>
      </ServicesSection>
      <SubscribeSection>
        <SubscribeContainer subimg={Subscribe}>
          <SubscribeText>
            <h2>become a driver</h2>
            <h1>Your time. Your goals. You're the boss.</h1>
          </SubscribeText>
          <SubscribeInput>
            <SubscribeInputText>
              <span>suscribe and joins us</span>
              <SubscribeInputBox>
                <input type="text" placeholder="Email" />
                <button>Next</button>
              </SubscribeInputBox>
            </SubscribeInputText>
          </SubscribeInput>
        </SubscribeContainer>
      </SubscribeSection>
      <Footer />
      </HomeContainer>
  );
};

export default Home;
