import styled from 'styled-components'
export const LogInContainer= styled.div`
width: 100%;
height: 100vh;
display: flex;
@media (max-width: 980px){
    height: fit-content;
}
`;
export const Left = styled.div`
width: 50%;
  height: 150%;
  position: relative;
  background: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before{
    content: "";
    position: absolute;
    background: url(../../Assests/login.png);
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    inset: 0;
    opacity: 0.2;
  }
  @media (max-width: 980px){
    display: none !important;
    &before{
        display: none;
    }
  }
`;
export const Right = styled.div`
width: 50%;
height: 50%;
padding: 30px;
display:flex;
align-items: center;
  flex-direction: column;
  @media (max-width: 980px){
    width: 100% !important;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  
  }
`;
export const LoginBox = styled.div`
width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 980px){
    height: fit-content;
    padding: 20px;
  }
`;
export const LoginBoxText = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
h1{
    color: #333;
    text-align: center;
    font-family: "Poppins";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
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
    line-height: 160%; /* 22.4px */
}
`;
export const LoginBoxInputs = styled.div`
width: 95%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginBoxInputBox = styled.div`
display: flex;
flex-direction: column;
gap: 2px;
margin-top: 20px;
input{
    display: flex;
    width: 404px;
    height: 56px;
    padding: 8px 16px;
    align-items: center;
    gap: 12px;
    border-radius: 10px;
    border: 1px solid var(--Greyscale-200, #e2e8f0);
}
@media (max-width: 450px){
    input{
        width: 304px;
    }
}
`;
export const ForgetPassword = styled.div`
width: 404px;
display: flex;
justify-content: space-between;
margin-top: 20px;
@media (max-width: 450px){
    width: 304px;
}
`;
export const ForgetPasswordCheckBox = styled.div`
display: flex;
gap: 5px;
span{
    color: #333;
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 22.4px */
    letter-spacing: 0.2px;
}
`;
export const ForgetPasswordLink = styled.div`
span{
    color: var(--blue, #3563e9);
  text-align: right;
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%; /* 22.4px */
  letter-spacing: 0.2px;
  cursor: pointer;
}
`;
export const LoginPageLoginBtn = styled.div`
margin-top: 20px;
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
    color: white;
}
@media (max-width: 450px){
    button{
        width: 304px;
    }
}
`;
export const AskSignUp = styled.div`
span{
    color: var(--Black, #333);

  /* P16/Regular */
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%; /* 27.2px */
  
}
a{
    color: var(--blue, #3563e9);
    text-decoration: none;
  }
`;
export const OtherLoginOption = styled.div`
display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Or = styled.div`
text-align: center;
span{
    color: var(--gray, #90a3bf);
    text-align: center;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 22.4px */
}
`;
export const OtherOptionBox = styled.div`
width: 404px;
  height: 55px;
  background: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  @media (max-width: 450px){
    width: 304px !important;
  }
`;
export const OtherOptionBoxLogo = styled.div`
width: 27px;
height: 27px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
