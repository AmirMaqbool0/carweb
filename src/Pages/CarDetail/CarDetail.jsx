import React from "react";
import "./style.css";
import CardetailLogo from "../../Assests/cardetail.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Detailpic from "../../Assests/detailpic.png";
import { Star, ArrowDownToLine } from "lucide-react";
import ReviewLogo from "../../Assests/google.png";
import CarCard from "../../Components/CarCard/CarCard";
import Footer from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
const CarDetail = () => {
  return (
    <div className="cardeatail-container">
      <Navbar />
      <div className="detail-box">
        <div className="detail-box-left">
          <div className="detail-box-left-logo">
            <img src={CardetailLogo} alt="" />
          </div>
          <div className="detail-box-left-pics">
            {Array(5)
              .fill()
              .map((item, i) => (
                <div className="detailpic">
                  <img src={Detailpic} alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className="detail-box-right">
          <div className="car-name-review">
            <div className="car-name">
              <span>Nissan GT - R</span>
            </div>
            <div className="review">
              {Array(5)
                .fill()
                .map((item, i) => (
                  <Star fill="yellow" size={20} />
                ))}
              <span>440+ Reviewer</span>
            </div>
          </div>
          <div className="car-detail-text">
            <span>
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </span>
          </div>
          <div className="car-detail-specification">
            {Array(4)
              .fill()
              .map((item, index) => (
                <div className="specification-box">
                  <div className="specification-heading">
                    <span>Type Car</span>
                  </div>
                  <div className="specification">
                    <span>Sport</span>
                  </div>
                </div>
              ))}
          </div>
          <div className="car-detail-price-btn">
            <div className="car-details-price">
              <h1>
                $80.00/<span>days</span>{" "}
              </h1>
              <h2>$100.00</h2>
            </div>
            <div className="car-detail-btn">
              <NavLink to={"/carpayment"} style={{ textDecoration: "none" }}>
                <button>Rent Now</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="people-review-section">
        <div className="people-review-heading">
          <h3>Reviews</h3>
          <span>13</span>
        </div>
        {Array(2)
          .fill()
          .map((item, i) => (
            <div className="people-review-box">
              <div className="people-review-upper">
                <div className="people-review-box-left">
                  <div className="people-review-logo-name">
                    <div className="people-review-logo">
                      <img src={ReviewLogo} alt="" />
                    </div>
                    <div className="people-review-name">
                      <h2>Alex Stanton</h2>
                      <span>CEO at Bukalapak</span>
                    </div>
                  </div>
                </div>
                <div className="people-review-box-right">
                  <div className="people-review-date">
                    <span>21 July 2022</span>
                  </div>
                  <div className="people-review-rating">
                    {Array(5)
                      .fill()
                      .map((item, i) => (
                        <Star fill="yellow" size={16}/>
                      ))}
                  </div>
                </div>
              </div>
              <div className="people-review-text">
                <span>
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </span>
              </div>
            </div>
          ))}

        <div className="more-review-btn">
          <button>
            Show All <ArrowDownToLine />
          </button>
        </div>
      </div>
      <div className="recent-car-section">
        <div className="car-upper">
          <div className="car-heading">
            <span>Recent Car</span>
          </div>
          <div className="ccar-btn">
            <span>View All</span>
          </div>
        </div>
        <div className="recent-car-cards">
          {Array(4)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </div>
      </div>
      <div className="recomend-car-section">
        <div className="car-upper">
          <div className="car-heading">
            <span>Recomendation Car</span>
          </div>
          <div className="ccar-btn">
            <span>View All</span>
          </div>
        </div>
        <div className="recomend-car-card">
          {Array(4)
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

export default CarDetail;
