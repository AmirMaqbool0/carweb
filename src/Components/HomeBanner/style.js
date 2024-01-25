import styled from 'styled-components'
export const HomeBannerContainer = styled.div`
width: 100%;
  height: fit-content;
  padding: 40px;
  display: flex;
  justify-content: center;
  background: white;
  padding: 20px;
`;
export const HomeBannerPage = styled.div`
background: url(${(props)=> props.picurl});
width: 90%;
height: 484px;
flex-shrink: 0;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
@media (max-width: 1290px){
    background-size: contain;
}
@media (max-width: 1020px){
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export const HomeBannerText = styled.div`
display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  right: -100px;
  bottom: 0;
  h1{
    width: 308px;
    height: 85px;
    flex-shrink: 0;
    color: #000;
    font-family: "Poppins";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
  }
  span{
    width: 268px;
    color: #000;
    font-family: "Roboto";
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  button{
    width: 210px;
    height: 59px;
    flex-shrink: 0;
    border-radius: 20px;
    border: none;
    color: white;
    background: #3563e9;
    cursor: pointer;
    font-size: 20px;
    font-family: "Roboto";
  }
  @media (max-width: 1150px){
    gap: 10px;
   position: absolute;
   top: 200px;
  }
  @media (max-width: 1020px){
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span{
        margin-right: 30px;
    }
  }
`;