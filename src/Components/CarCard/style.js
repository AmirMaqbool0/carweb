import styled from 'styled-components'
export const CarCardContainer = styled.div`
width: 304px;
height: 388px;
background: white;
padding: 10px;
margin-top: 70px;
display: flex;
flex-direction: column;
gap: 30px;
`;
export const CardTop = styled.div`
display: flex;
justify-content: space-between;
`;
export const CarName = styled.div`
display: flex;
  flex-direction: column;
  h3{
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
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Bold/Type@14 */
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
  }
`;
export const CarLikebtn = styled.div`
cursor: pointer;
`;
export const CarCardLogo = styled.div`
width: 232px;
height: 108px;
flex-shrink: 0;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const CarSpecification = styled.div`
display: flex;
gap: 30px;
align-items: center;
justify-content: center;
`;
export const CarSpecificationBox = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 0px;
color: var(--Secondary-300, var(--gray, #90a3bf));
font-size: 14px;
`;
export const CarCardPrice = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;
export const RentPrice = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  span{
    color: #90a3bf;
  }
`;
export const RentBtn = styled.div`
button{
    display: flex;
    width: 116px;
    height: 44px;
    padding: 0px 20px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: var(--blue, #3563e9);
    border: none;
    margin-top: 30px;
    cursor: pointer;
    font-family: "Roboto";
    color: white;
}
`;