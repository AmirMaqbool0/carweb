import styled from 'styled-components'
export const CarPaymentContainer = styled.div`
width: 100%;
height: fit-content;
padding: 30px;
background: #f6f7f9;
display: flex;
justify-content: space-between;
@media (max-width: 1090px){
    display: flex;
    flex-direction: column-reverse;
}
@media (max-width: 560px){
    padding: 0;
}
`;
export const CarPaymentLeft = styled.div`
width: 67%;
height: fit-content;
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 1090px){
    width: 100%;
}
@media (max-width: 560px){
    padding: 0;
}
`;
export const CarPaymentRight = styled.div`
width: 30%;
height: 464px;
background: white;
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 1090px){
    width: 100%;
}
`;
export const PaymentCardUpper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const PaymentCardHeading = styled.div`
span{
    color: var(--Secondary-500, #1a202c);

    /* Bold/Type@20 */
    font-family: Plus Jakarta Sans;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.6px;
}
`;
export const PaymentCardText = styled.div`
span{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Medium/Type@14 */
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
}
`;
export const CarPaymentLogoName = styled.div`
display: flex;
  gap: 10px;
`;
export const CarPaymentLogo = styled.div`
width: 132px;
height: 108px;
border-radius: 10px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const CarPaymentNameRating = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const CarPaymentName = styled.div`
span{
    color: var(--Secondary-500, #1a202c);

  /* Bold/Type@32 */
  font-family: Plus Jakarta Sans;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 48px */
  letter-spacing: -0.96px;
}
@media (max-width: 1290px){
    span{
        font-size: 20px;
    }
}
`;
export const CarPaymentRating = styled.div`
display: flex;
  gap: 5px;
  span{
    color: var(--Secondary-400, #596780);

    /* Medium/Type@14 */
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
    
  }
  @media (max-width: 1290px){
    display: flex;
    flex-direction: column;
  }
`;
export const PaymentCardPrice = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const PaymentPriceBox = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
h2{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Medium/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
span{
    color: var(--Secondary-500, #1a202c);
    text-align: right;
  
    /* Semibold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
`;
export const PaymentTotalPrice = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const PaymentTotaltext = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
h1{
    color: var(--Secondary-500, #1a202c);

    /* Bold/Type@20 */
    font-family: " Plus Jakarta Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.6px;
}
h3{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Medium/Type@14 */
    font-family: Plus Jakarta Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
}
span{
    color: var(--Secondary-500, #1a202c);
    text-align: right;
    font-family: "Plus Jakarta Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
`;
export const BilingInfo = styled.div`
width: 100%;
background: white;
height: fit-content;
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;
`;
export const InfoUpper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const InfoHeading = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
span{
    color: var(--Secondary-500, #1a202c);

    /* Bold/Type@20 */
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.6px;
}
h1{
  font-size: 24px;
}
`;
export const Heading = styled.div `
color: var(--Secondary-300, var(--gray, #90a3bf));

/* Medium/Type@14 */
font-family: Plus Jakarta Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
letter-spacing: -0.28px;
`;
export const InfoDate = styled.div`
color: var(--Secondary-300, var(--gray, #90a3bf));
text-align: right;

/* Medium/Type@14 */
font-family: Plus Jakarta Sans;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 150%; /* 21px */
letter-spacing: -0.28px;
`;
export const PaymentInputs = styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;
`;
export const PaymentInputBox = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
span{
    color: var(--Secondary-500, #1a202c);

  /* Semibold/Type@16 */
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
}
input{
    width: 316px;
    height: 56px;
    border-radius: 10px;
    background: #f6f7f9;
    border: none;
    padding: 10px;
}
@media (max-width: 560px){
    input{
        width: 320px;
    }
}
`;
export const RentalInfo = styled.div`
width: 100%;
  height: fit-content;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
`;
export const PickUpHeading = styled.div`
display: flex;
  gap: 10px;
  align-items: center;
  span{
    color: var(--Secondary-500, #1a202c);
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;
export const PaymentDropDown = styled.div`
width: 316px;
height: 56px;
border-radius: 10px;
background: #f6f7f9;
display: flex;
align-items: center;
padding: 10px;
.p-dropdown-items {
    background: white;
  }
`;
export const PaymentMethod = styled.div`
width: 100%;
  height: fit-content;
  border-radius: 10px;
  background: var(--Primary-0, #fff);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  @media (max-width: 560px){
    padding:5px;
 }
`;
export const PaymentMethodBox = styled.div`
width: 100%;
  height: fit-content;
  border-radius: 10px;
  background: #f6f7f9;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
 
`;
export const PaymentMethodHeader = styled.div`
display: flex;
justify-content: space-between;
`;
export const CreditLogo = styled.div`
display: flex;
gap: 5px;
img{
    width: 48px;
  height: 16px;
  object-fit: cover;
}
`;
export const PaymentOption = styled.div`
width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #f6f7f9;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
export const PaymentOptionName = styled.div`
display: flex;
gap: 10px;
align-items: center;
span{
    color: var(--Secondary-500, #1a202c);

    /* Semibold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
`;
export const PaymentOptionLogo = styled.div`
width: 100px;
height: 24px;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const ConfirmationBox = styled.div`
width: 100%;
  height: 484px;
  border-radius: 10px;
  background: var(--Primary-0, #fff);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 560px){
   height:fit-content;
}
`;
export const PolicyBox = styled.div`
width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #f6f7f9;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  span{
    color: #1f2544;

    /* Semibold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
  }
`;
export const ConfirmationBtn = styled.div`
button{
    display: flex;
  width: 140px;
  height: 56px;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: var(--blue, #3563e9);
  border: none;
  cursor: pointer;
}
`
;
export const SaftyMsg = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    color: var(--Secondary-500, #1a202c);

  /* Semibold/Type@16 */
  font-family: "Plus Jakarta Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.32px;
  }
  span{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Medium/Type@14 */
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  }
`;