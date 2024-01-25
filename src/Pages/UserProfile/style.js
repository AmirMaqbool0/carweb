import styled from 'styled-components'
export const UserProfileContaine = styled.div`
width: 100%;
height: fit-content;
padding: 30px;
display: flex;
flex-direction: column;
gap: 20px;
background: #f6f7f9;
@media (max-width: 450px){
  padding: 0;
}
`;
export const UserProfileBox = styled.div`
width: 100%;
  height: fit-content;
  border-radius: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
`;
export const UserProfileBoxs = styled.div`
width: 100%;
height: 342px;
border-radius: 20px;
background: #fff;
padding: 30px;
display: flex;
justify-content: space-around;
gap: 30px;
@media (max-width: 870px){
  display: flex;
  flex-direction: column;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;
export const UserProfileLogoBtn = styled.div`
display: flex;
gap: 10px;
`;
export const UserProfileLogo = styled.div`
width: 110px;
height: 110px;
border-radius: 50%;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const UserProfileBtn = styled.div`
display: flex;
align-items: end;
justify-content: end;
button{
    width: 135px;
    height: 42px;
    border-radius: 6px;
    background: var(--blue, #3563e9);
    cursor: pointer;
    color: #fff;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
}
`;
export const UserProfileInputs = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 30px;
`;
export const UserProfileInputBox = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
span{
    color: #252525;
    font-family: Plus Jakarta Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 160%; /* 28.8px */
    letter-spacing: 0.36px;
}
input{
    border: none;
    width: 306px;
    height: 54px;
    border-radius: 8px;
    background: #f6f7f9;
}
`;
export const UserProfileGender = styled.div`
display: flex;
gap: 2px;
`;
export const UserProfileGenderBox = styled.div`
width: 167px;
  height: 56px;
  background: #f6f7f9;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  input{
    width: 18px;
    height: 18px;
  }
  span{
    color: #252525;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const UserLisenceHeading = styled.div`
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
`;
export const UserLisenceHeadingBox = styled.div`
width: 306px;
height: 54px;
border-radius: 8px;
background: #f6f7f9;
`;
export const UserLisenceBox = styled.div`
width: 352px;
height: 300px;
display: flex;
flex-direction: column;
gap: 10px;
padding: 20px;
`;
export const UserLisenceBoxHeading = styled.div`
span{
    color: #252525;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;
export const UserLisenceTextBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 164px;
background: #f6f7f9;
padding: 10px;
span{
    color: #808d9e;
  text-align: center;
  font-family: "Inter";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; 
}
`;
export const UserLisencebtn = styled.div`
display: flex;
width: 100%;
align-items: end;
justify-content: end;
button{
    width: 135px;
    height: 42px;
    border-radius: 6px;
    background: var(--blue, #3563e9);
    color: #fff;
    font-family: "Inter";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    border: none;
}
`;