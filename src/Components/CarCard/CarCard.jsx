import React from 'react'
import './style.css'
import { Fuel, Heart,Aperture,UsersRound } from 'lucide-react'
import CarCardlogo from '../../Assests/carcard.png'

const CarCard = () => {
  return (
    <div className='car-card-cointainer'>
     <div className="card-top">
        <div className="car-name">
            <h3>Swift</h3>
            <span>Sport</span>
        </div>
        <div className="car-like-btn"><Heart /></div>
     </div>
     <div className="car-card-logo">
        <img src={CarCardlogo} alt="" />
     </div>
     <div className="car-specification">
        <div className="specification-box">
        <Fuel color=' #90A3BF'/>
            <span>90L</span>
        </div>
        <div className="specification-box">
        <Aperture  color=' #90A3BF' />
            <span>Manual</span>
        </div>
        <div className="specification-box">
        <UsersRound  color=' #90A3BF'/>
            <span>4 People</span>
        </div>
        
     </div>
     <div className="carcard-price">
      <div className="rent-price">
        <span style={{color:'black'}}>Pkr.</span>
        <h3>3000/</h3>
        <span>Day</span>
      </div>
      <div className="rent-btn">
        <button>Rent Now</button>
      </div>
     </div>
    </div>
  )
}

export default CarCard