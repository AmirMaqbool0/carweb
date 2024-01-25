import styled from 'styled-components'
export const NewPasswordContainer = styled.div`
width: 100%;
height: 100vh;
background: white;
display: flex;
align-items: center;
justify-content: center;
`;
export const NewPasswordBox = styled.div`
width: 90%;
height: 577px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
display: flex;
`;
export const NewPasswordLeft = styled.div`
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
  @media (max-width: 980px) {
    display: none;
  }
`;
export const NewPasswordRight = styled.div`
width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 980px){
    width: 100%;
  }
`;
export const NewPasswordText = styled.div`
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
    line-height: 160%;
  }
`;
export const NewPasswordInputs = styled.div`
display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const NewPasswordInput = styled.div`
display: flex;
width: 404px;
height: 56px;
padding: 8px 16px;
align-items: center;
gap: 12px;
border-radius: 10px;
border: 1px solid var(--Greyscale-200, #e2e8f0);
justify-content: space-between;
input{
    width: 90%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 20px;
}
@media (max-width: 480px){
    width: 300px;
    input{
        width: 300px;
    }
}
`;
export const NewPasswordBtn = styled.div`
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
    color: var(--Additional-white, #fff);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; /* 22.4px */
    letter-spacing: 0.2px;
    border: none;
    cursor: pointer;
    @media (max-width: 480px){
        width: 300px;
    }
}
`;