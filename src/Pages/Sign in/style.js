import styled from 'styled-components'
export const SigninContainer = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  @media (max-width: 980px){
    height: fit-content;
  }
`;
export const Left = styled.div`
width: 50%;
height:160%;
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
@media (max-width: 980px){
    width: 100% !important;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
  
  }
`;
export const SigninBox = styled.div`
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
export const SigninBoxText = styled.div`
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
export const InputBoxInputs = styled.div`
width: 95%;
height: 400px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.PhoneInputCountry{
    position: absolute !important;
}

`;
export const SigninBoxInputBox = styled.div`
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

export const SigninPageLoginBtn = styled.div`
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
export const OtherLoginOption  = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
margin-top: 30px;

`;
export const AskSignUp  = styled.div`
a{
    color: var(--blue, #3563e9);
  text-decoration: none;
}
`;
export const Or  = styled.div`
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
export const OtherOption  = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
export const OtherOptionBox  = styled.div`
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
export const OtherOptionBoxLogo  = styled.div`
width: 27px;
height: 27px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;