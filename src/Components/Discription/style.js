import styled from 'styled-components'
export const DiscriptionContainer =styled.div`
width: 100%;
/* height: 100vh; */
display: flex;
align-items: center;
justify-content: space-around;
padding: 30px;
background: #f6f7f9;
@media (max-width: 1130px){
    flex-direction: column;
    gap: 70px;
    align-items: center;
    justify-content: center;
}
`;
export const DiscriptionLogo =styled.div`
display: flex;
  position: relative;
  img{
    position: absolute;
  }
  @media (max-width: 1220px){
    img{
        width: 550px;
    }
  }
  @media (max-width: 780px){
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 300px;
    }
  }

  @media (max-width: 480px){
    margin-right: 100px;
  
  }
`;
export const LeftCircle =styled.div`
svg{
    width: 477.93px;
    height: 453.057px;
    flex-shrink: 0;
 
}
@media (max-width: 1220px){
    svg{
      width: 377.93px;
      height: 353.057px;
      flex-shrink: 0;
    }
  }

@media (max-width: 780px){
svg{
    width: 200.93px;
    height: 193.057px;
}
}
`;
export const RightCircle =styled.div`
svg{
    width: 457.092px;
  height: 415.608px;
  transform: rotate(-12.107deg);
  flex-shrink: 0;
  position: absolute;
  left: 180px;
  top: 40px;
  
}
@media (max-width: 1220px){
    svg{
        width: 357.092px;
        height: 315.608px;
    }
  }
@media (max-width: 780px){
    svg{
        width: 200.092px;
        height: 160.608px;
        left: 100px;
        top: 00px;
    }
}
`;
export const DiscriptionText =styled.div`
width: 396px;
padding: 20px;
gap: 2px;
h1{
    width: 396px;
  height: 73px;
  flex-shrink: 0;
  color: #000;
  font-family: "Poppins";
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
span{
    color: black;
    font-family: "Roboto";
}
@media (max-width: 480px){
    width: 396px;
    padding: 20px;
    gap: 2px;
    margin-left: 20px;
    h1{
        width: 396px;
    height: 73px;
    flex-shrink: 0;
    color: #000;
    font-family: "Poppins";
    font-size: 56px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 46px;
    }
    span{
        color: black;
        font-family: "Roboto";
        font-size: 12px;
    }
}
`;