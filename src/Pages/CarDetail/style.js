import {styled} from 'styled-components'
export const CarDetailContainer = styled.div`
width: 100%;
height: fit-content;
background: #f6f7f9;
display: flex;
flex-direction: column;
gap: 30px;
overflow: hidden;
`;
export const DetailBox = styled.div`
display: flex;
  gap: 20px;
  @media (max-width: 1320px){
    display: flex;
    justify-content: space-between;
  }
  @media (max-width: 1220px){
    display: flex;
    flex-direction: column;
    padding: 30px;

  }
`;
export const DetailBoxLeft = styled.div`
width: 65%;
height: 508px;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 1320px){
    width: 60%;
}
@media (max-width: 1220px){
    width: 100%;
}
`;
export const DetailBoxLeftLogo = styled.div`
width: 100%;
height: 60%;
img{
    width: 100%;
  height: 100%;
  object-fit: cover;
}@media (max-width: 1220px){
    height: 70%;
}
`;
export const DetailBoxLeftPics = styled.div`
display: flex;
gap: 20px;
align-items: center;
justify-content: center;
`;
export const DetailPic = styled.div`
width: 148px;
height: 124px;
border-radius: 10px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
@media (max-width: 480px){
    width: 25%;
}
`;
export const DetailBoxRight = styled.div`
width: 33%;
height: 508px;
background: white;
padding: 10px;
display: flex;
gap: 30px;
flex-direction: column;
@media (max-width: 1220px){
    width: 100%;
    height: fit-content;
}
`;
export const CarNameReview = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const CarName = styled.div`
Span{
    color: var(--Secondary-500, #1a202c);

  /* Bold/Type@32 */
  font-family: "Plus Jakarta Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  letter-spacing: -0.96px;
}
`;
export const Review = styled.div`
display: flex;
gap: 10px;
align-items: center;
span{
    color: #333;
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.28px;
}
`;
export const CarDetailText = styled.div`
width: 444px;
span{
    color: #333;
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 200%; /* 40px */
  letter-spacing: -0.4px;
}
@media (max-width: 1220px){
    width: 100%;
}
`;
export const CarDetailSpecification = styled.div`
display: flex;
gap: 30px;
flex-wrap: wrap;
`;
export const SpecificationHeading = styled.div`
span{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Regular/Type@20 */
    font-family: "Plus Jakarta Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 30px */
    letter-spacing: -0.4px;
}
@media (max-width: 480px){
    span{
        font-size: 16px;
    }
}
`;
export const Specification = styled.div`
span{
    color: #333;
  text-align: right;

  /* Semibold/Type@20 */
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.4px;
}
@media (max-width: 480px){
    font-size: 16px;
}
`;
export const SpecificationBox = styled.div`
display: flex;
gap: 30px;
width: 40%;
@media (max-width: 480px){
    display: flex;
    gap: 10px;
}
`;
export const CarDetailPriveBtn = styled.div`
display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const CarDetailPrice = styled.div`   
display: flex;
flex-direction: column;
align-items: baseline;
h1{
    color: var(--Secondary-500, #1a202c);
  font-family: "Plus Jakarta Sans";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
span{
    color: var(--Secondary-300, #90a3bf);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
h2{
    color: var(--Secondary-300, var(--gray, #90a3bf));
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: strikethrough;
}
`;
export const CarDetailBtn = styled.div`
 button{
    display: flex;
    width: 140px;
    height: 56px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--blue, #3563e9);
    color: var(--Primary-0, #fff);
    text-align: center;
  
    /* Bold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    cursor: pointer;
    border: none;
 }
`;
export const PeopleReviewSection = styled.div`
width: 100%;
  height: 452px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  @media (max-width: 620px){
    height: fit-content;
  }
`;
export const PeopleReviewHeading = styled.div`  
display: flex;
gap: 20px;
h3{
    color: var(--Secondary-500, #1a202c);
  font-family: "Plus Jakarta Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
}
span{
    display: flex;
    width: 44px;
    height: 28px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: var(--blue, #3563e9);
    color: var(--Primary-0, #fff);
    text-align: center;
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
`;
export const PeopleReviewBox = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const PeopleReviewUpper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
@media (max-width: 480px){
    display: flex;
    gap: 0;
}
`;
export const PeopleReviewLogoName = styled.div`
display: flex;
gap: 20px;
align-items: center;
`;
export const PeopleReviewLogo = styled.div`
width: 56px;
height: 56px;
border-radius: 50%;
overflow: hidden;

img{
    width: 100%;
    height: 100%;
    object-fit: cover; 
}
@media (max-width: 480px){
    width: 36px;
    height: 36px;
}
`;
export const PeopleReviewName = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
width: 174.149px;
h2{
    color: var(--Secondary-500, #1a202c);

    /* Bold/Type@20 */
    font-family: "Plus Jakarta Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.6px;
}
span{
    color: var(--Secondary-500, #1a202c);

  /* Bold/Type@20 */
  font-family: " Plus Jakarta Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 30px */
  letter-spacing: -0.6px;
}
@media (max-width: 480px){
    h2{
        font-size: 16px;
    }
    span{
        font-size: 16px;
    }
}
`;
export const PeopleReviewBoxRight = styled.div`
display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const PeopleReviewDate = styled.div`
span{
    color: var(--Secondary-300, var(--gray, #90a3bf));
    text-align: right;
  
    /* Medium/Type@14 */
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
}
`;
export const PeopleReviewText = styled.div`
margin-left: 80px;
span{
    color: var(--Secondary-400, #596780);
    font-family: " Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 28px */
    letter-spacing: -0.28px;
}
`;
export const PeopleReviewbtn = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
button{
    display: flex;
    width: 132px;
    height: 44px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    cursor: pointer;
}
`;
export const RecentCarSection = styled.div`
width: 100%;
height: fit-content;
display: flex;
flex-direction: column;
gap: 0px;
padding: 20px;
`;
export const CarUpper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const CarHeading = styled.div`
span{
    color: var(--Secondary-300, var(--gray, #90a3bf));
    text-align: center;
  
    /* Semibold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
`;
export const CarBtn = styled.div`
span{
    color: var(--Primary-500, var(--blue, #3563e9));
  text-align: center;

  /* Semibold/Type@16 */
  font-family: "Plus Jakarta Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  cursor: pointer;
}
`;
export const RecentCarCards = styled.div`
display: flex;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  @media (max-width: 710px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;  
export const RecomendCarSection = styled.div`
width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 20px;
`;
export const RecomendCarCard = styled.div`
display: flex;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;