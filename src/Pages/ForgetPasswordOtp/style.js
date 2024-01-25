import styled from 'styled-components'
export const ForgetOtpContainer =styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`;
export const ForgetOtpBox =styled.div`
width: 90%;
height: 576px;
background-color: #fff;
display: flex;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media (max-width: 490px){
    padding:0;
 }
`;
export const ForgetOtpLeft =styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: lightblue;
&:before{
    content: "";
    position: absolute;
    background: url(../../Assests/login.png);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    inset: 0;
    opacity: 0.3;
}
img{
    isolation: isolate;
}
@media (max-width: 1100px){
    display: none;
}
`;
export const ForgetOtpRight =styled.div`
width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1100px){
    width: 100%;
  }
`;
export const ForgetOtptext =styled.div`
text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    color: #333;
    text-align: center;
    font-family: " Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 125%; /* 30px */
    letter-spacing: 0.2px;
  }
  span{
    color: var(--Greyscale-500, #64748b);
    text-align: center;
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; color: var(--Greyscale-500, #64748b);
    text-align: center;
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`;
export const ForgetOtpInput =styled.div`
display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
export const ForgetOtpInputs =styled.div`
display: flex;
gap: 30px;
input{
    display: flex;
    width: 52px;
    height: 56px;
    padding: 8px 17px;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    border: 1px solid var(--Greyscale-200, #e2e8f0);
    font-size: 16px;
}
@media (max-width: 550px){
    display: flex;
    width: 32px;
    height: 36px;
    align-items: center;
    
justify-content: center;
      gap:10px;
    font-size: 16px;
    padding: 6px;
    input{
        width: 42px;
    height: 46px; 
    }
}
@media (max-width: 430px){
    display: flex;
    gap: 5px;
}
`;
export const Timer=styled.div`
color: #333;
font-family: Plus Jakarta Sans;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 140%; /* 22.4px */
letter-spacing: 0.2px;
`;
export const ForgetOtpBtn=styled.div`
button{
    display: flex;
  width: 404px;
  height: 56px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  background: #3563e9;
  border: none;
  cursor: pointer;
  font-size: 16px;
  color: var(--Additional-white, #fff);
  font-family: Plus Jakarta Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.2px;
}
@media (max-width: 550px){
button{
    width: 300px;
}
}
`;