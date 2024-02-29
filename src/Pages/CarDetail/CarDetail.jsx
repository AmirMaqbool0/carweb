import React from "react";
import CardetailLogo from "../../Assests/cardetail.jpg";
import Navbar from "../../Components/Navbar/Navbar";
import Detailpic from "../../Assests/detailpic.png";
import { Star, ArrowDownToLine } from "lucide-react";
import ReviewLogo from "../../Assests/google.png";
import CarCard from "../../Components/CarCard/CarCard";
import Footer from "../../Components/Footer/Footer";
import { NavLink } from "react-router-dom";
import {CarDetailContainer,DetailBox,DetailBoxLeft,DetailBoxLeftLogo,DetailBoxLeftPics,DetailPic,DetailBoxRight,CarNameReview,CarName,Review,CarDetailText,CarDetailSpecification,Specification,SpecificationBox,SpecificationHeading,CarDetailBtn,CarDetailPrice,CarDetailPriveBtn,PeopleReviewBox,PeopleReviewHeading,PeopleReviewLogo,PeopleReviewLogoName,PeopleReviewName,PeopleReviewSection,PeopleReviewUpper,PeopleReviewBoxRight,PeopleReviewDate,PeopleReviewText,PeopleReviewbtn,RecentCarCards,RecentCarSection,CarBtn,CarUpper,CarHeading,RecomendCarCard,RecomendCarSection} from './style.js'

const CarDetail = () => {
  return (
    <CarDetailContainer>
      <Navbar />
      <DetailBox>
        <DetailBoxLeft>
          <DetailBoxLeftLogo>
            <img src={CardetailLogo} alt="" />
          </DetailBoxLeftLogo>
          <DetailBoxLeftPics>
            {Array(5)
              .fill()
              .map((item, i) => (
                <DetailPic>
                  <img src={Detailpic} alt="" />
                </DetailPic>
              ))}
          </DetailBoxLeftPics>
        </DetailBoxLeft>
        <DetailBoxRight>
          <CarNameReview>
            <CarName>
              <span>Nissan GT - R</span>
            </CarName>
            <Review>
              {Array(5)
                .fill()
                .map((item, i) => (
                  <Star fill="yellow" size={20} />
                ))}
              <span>440+ Reviewer</span>
            </Review>
          </CarNameReview>
          <CarDetailText>
            <span>
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </span>
          </CarDetailText>
          <CarDetailSpecification>
            {Array(4)
              .fill()
              .map((item, index) => (
                <SpecificationBox>
                  <SpecificationHeading>
                    <span>Type Car</span>
                  </SpecificationHeading>
                  <Specification>
                    <span>Sport</span>
                  </Specification>
                </SpecificationBox>
              ))}
          </CarDetailSpecification>
          <CarDetailPriveBtn>
            <CarDetailPrice>
              <h1>
                $80.00/<span>days</span>{" "}
              </h1>
              <h2>$100.00</h2>
            </CarDetailPrice>
            <CarDetailBtn>
              <NavLink to={"/carpayment"} style={{ textDecoration: "none" }}>
                <button>Rent Now</button>
              </NavLink>
            </CarDetailBtn>
          </CarDetailPriveBtn>
        </DetailBoxRight>
      </DetailBox>

      <PeopleReviewSection>
        <PeopleReviewHeading>
          <h3>Reviews</h3>
          <span>13</span>
        </PeopleReviewHeading>
        {Array(2)
          .fill()
          .map((item, i) => (
            <PeopleReviewBox>
              <PeopleReviewUpper>
                <div className="people-review-box-left">
                  <PeopleReviewLogoName>
                    <PeopleReviewLogo>
                      <img src={ReviewLogo} alt="" />
                    </PeopleReviewLogo>
                    <PeopleReviewName>
                      <h2>Alex Stanton</h2>
                      <span>CEO at Bukalapak</span>
                    </PeopleReviewName>
                  </PeopleReviewLogoName>
                </div>
                <PeopleReviewBoxRight>
                  <PeopleReviewDate>
                    <span>21 July 2022</span>
                  </PeopleReviewDate>
                  <div className="people-review-rating">
                    {Array(5)
                      .fill()
                      .map((item, i) => (
                        <Star fill="yellow" size={16}/>
                      ))}
                  </div>
                </PeopleReviewBoxRight>
              </PeopleReviewUpper>
              <PeopleReviewText>
                <span>
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </span>
              </PeopleReviewText>
            </PeopleReviewBox>
          ))}

        <PeopleReviewbtn>
          <button>
            Show All <ArrowDownToLine />
          </button>
        </PeopleReviewbtn>
      </PeopleReviewSection>
      <RecentCarSection>
        <CarUpper>
          <CarHeading>
            <span>Recent Car</span>
          </CarHeading>
          <CarBtn>
            <span>View All</span>
          </CarBtn>
        </CarUpper>
        <RecentCarCards>
          {Array(4)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </RecentCarCards>
      </RecentCarSection>
      <RecomendCarSection>
        <CarUpper>
          <CarHeading>
            <span>Recomendation Car</span>
          </CarHeading>
          <CarBtn>
            <span>View All</span>
          </CarBtn>
        </CarUpper>
        <RecomendCarCard>
          {Array(4)
            .fill()
            .map((item, i) => (
              <CarCard />
            ))}
        </RecomendCarCard>
      </RecomendCarSection>
      <Footer />
    </CarDetailContainer>
  );
};

export default CarDetail;
