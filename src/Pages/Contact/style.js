import styled from 'styled-components'
export const ContactSection = styled.div`
width: 100%;
background: #f6f7f9;
padding: 30px;
display: flex;
align-items: center;
justify-content: center;
@media (max-width: 530px){
    padding: 0;
}
`;
export const ContactBox = styled.div`
width: 90%;
  height: fit-content;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1220px){
    display: flex;
    flex-direction: column-reverse;
    gap: 20px;
  }
  @media (max-width: 530px){
    width: 100%;
  }
  
`;
export const ContactBoxLeft = styled.div`
width: 30%;
height: 702.429px;
border-radius: 20px;
background: var(--blue, #3563e9);
display: flex;
flex-direction: column;
gap: 10px;
padding: 30px;
@media (max-width: 1220px){
    width: 100%;
}
`;
export const ContactBoxRight = styled.div`
width: 65%;
height: fit-content;
@media (max-width: 1220px){
    width: 100%;
}
`;
export const ContactBoxLeftHeadig = styled.div`
span{
    color: #fff;
    font-family: "SF Pro Display";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%; /* 38.4px */
    letter-spacing: 0.48px;
}
`;
export const ContactBoxText = styled.div`
width: 292px;
span{
    color: rgba(255, 255, 255, 0.6);
    font-family: " SF Pro Display";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 25.6px */
    letter-spacing: 0.32px;
}
`;
export const PersonalInformation = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const PersonalInfoBox = styled.div`
width: 100%;
display: flex;
gap: 30px;
`;
export const PersonalInfoLogo = styled.div`
width: 30px;
height: 30px;
background: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`;
export const PersonalInfoText = styled.div`
span{
    color: #fff;
    font-family: SF Pro Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 28.8px */
    letter-spacing: 0.36px;
}
`;
export const PersonalBoxRight = styled.div`
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;
`;
export const ContactBoxInputs = styled.div`
display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media (max-width: 1333px){
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 1220px){
    display: flex;
    align-items: start;
    justify-content: start;
  }
`;
export const ContactBoxInputBox = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  span{
    color: #252525;
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 28.8px */
    letter-spacing: 0.36px;
  }
  input{
    width: 306px;
    height: 54px;
    border-radius: 8px;
    background: #f6f7f9;
    border: none;
  }
  @media (max-width: 450px){
    input{
        width: 250px;
    }
  }
`;
export const ContactMessageBox = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
span{
    color: #252525;
    font-family: "Plus Jakarta Sans";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 28.8px */
    letter-spacing: 0.36px;
}
input{
    width: 95%;
    height: 289px;
    border-radius: 8px;
    background: #f6f7f9;
    border: none;
}
`;
export const ContactBoxBtn = styled.div`
width: 95%;
display: flex;
justify-content: end;
align-items: end;
margin-top:10px;
button{
    display: flex;
    width: 180.929px;
    height: 47.893px;
    padding: 10px 20px;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 30px;
    background: var(--blue, #3563e9);
    border: none;
    cursor: pointer;
}
`;