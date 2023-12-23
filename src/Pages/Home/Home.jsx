import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './style.css'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import Discription from '../../Components/Discription/Discription'
import CarCard from '../../Components/CarCard/CarCard'
import { Briefcase } from 'lucide-react'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
       <HomeBanner/>
       <Discription/>
       <div className="car-cards">
        <div className="car-cards-top">
          <span>Popular Car</span>
          <span><a href="$">View All</a></span>
        </div>
        <div className="car-card-boxses">

        <CarCard/>
        <CarCard/>
        <CarCard/>
        <CarCard/>
        </div>
       </div>
       <div className="services-section">
        <div className="services-box">

        <div className="services-heading">
          <h3>Fell the best experience with our luxury car</h3>
        </div>
        <div className="services-cards">
          <div className="services-card">
            <div className="services-card-logo">
            <Briefcase size={40} color="#ffffff" />
            
            </div>
            <div className="service-card-heading">
              <h3>Book with flexibility</h3>
            </div>
            <div className="service-card-text">
              <span>Easily find car and book with no change fees.</span>
            </div>
          </div>
          <div className="services-card">
            <div className="services-card-logo">
            <Briefcase size={40} color="#ffffff" />
            
            </div>
            <div className="service-card-heading">
              <h3>Book with flexibility</h3>
            </div>
            <div className="service-card-text">
              <span>Easily find car and book with no change fees.</span>
            </div>
          </div>
          <div className="services-card">
            <div className="services-card-logo">
            <Briefcase size={40} color="#ffffff" />
            
            </div>
            <div className="service-card-heading">
              <h3>Book with flexibility</h3>
            </div>
            <div className="service-card-text">
              <span>Easily find car and book with no change fees.</span>
            </div>
          </div>


        </div>
        
        </div>
       </div>
       <div className="subscribe-section">
        <div className="subscribe-container">
          <div className="subscribe-text">
           <h2>become a driver</h2>
           <h1>Your time. Your goals. You're the boss.</h1>
          </div>
          <div className="subscribe-input">
            <div className="subscribe-input-text">
              <span>suscribe and joins us</span>
              <div className="subscribe-input-box">
                <input type="text" placeholder='Email' />
                <button>Next</button>
              </div>
            </div>
            
          </div>
        </div>
       </div>
    </div>
  )
}

export default Home