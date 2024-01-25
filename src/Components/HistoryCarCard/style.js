import styled from 'styled-components'
export const HistoryCarCardContainer = styled.div`
width: 568px;
height: 195px;
background: #fff;
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
@media (max-width:620px){
    width: 468px;
}
@media (max-width:520px){
    width: 348px;
}
`; 
export const HistoryCarCardHeader = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const HistoryCardName = styled.div`
display: flex;
gap: 20px;
align-items: center;
h1{
    color: var(--Secondary-500, #1a202c);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 21px */
    letter-spacing: -0.28px;
}
span{
    color: var(--Secondary-300, var(--gray, #90a3bf));

    /* Medium/Type@12 */
    font-family: "Plus Jakarta Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.24px;
}
`;
export const HistoryCardBtn = styled.div`
display: flex;
gap: 20px;
align-items: center;
span{
    color: #ff1c00;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
}
button{
    display: flex;
    width: 84px;
    height: 29px;
    padding: 0px 3px;
    justify-content: center;
    align-items: center;
    gap: -1px;
    border-radius: 4px;
    background: #2cb67d;
    border: none;
    cursor: pointer;
}
`;
export const HistoryCardRow2 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const HistoryCardLogo = styled.div`
width: 169px;
height: 79px;
overflow: hidden;
img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;
export const CarHistoryPickUpDrop = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;
export const CarHistoryPickUp = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
h1{
   

    color: #252525;
  font-family: "Satoshi";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
span{
    color: var(--gray, #90a3bf);
    font-family: "Satoshi";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
@media (max-width:520px){
   
    h1{
     font-size: 12px;
    } 
   }
`;
export const CarHistoryDrop = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    color: #252525;
    font-family: "Satoshi";
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span{
    color: var(--gray, #90a3bf);
    font-family: "Satoshi";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  @media (max-width:520px){
   
   h1{
    font-size: 12px;
   } 
  }
`;
export const CarHistoryDay = styled.div`
margin-top: 30px;
span{
    color: var(--Black, #333);
    font-family: "Satoshi";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
`;
export const Row3 = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
export const HistoryCardSpecification = styled.div`
display: flex;
gap: 10px;
`;
export const HistoryCardSpecificationBox = styled.div`
display: flex;
  gap: 10px;
  align-items: center;
  span{
    color: var(--Secondary-300, var(--gray, #90a3bf));

  /* Medium/Type@12 */
  font-family: "Plus Jakarta Sans";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.24px;
  }
  @media (max-width:520px){
    display: flex;
    gap: 3px;
  }
`;
export const HistoryCardPrice = styled.div`
display: flex;
gap: 10px;
align-items: center;
justify-content: center;
`;
export const HistoryCardPriceHeading = styled.div`
span{
    color: var(--gray, #90a3bf);
    font-family: "Plus Jakarta Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.14px;
}
`;
export const HistoryCardPriceValue = styled.div`
display: flex;
h1{
    color: var(--Secondary-500, #1a202c);
    text-align: right;
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.16px;
}
span{
    color: var(--Secondary-300, #90a3bf);
    font-family: "Plus Jakarta Sans";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.12px;
}
`;
export const PopUpContainer = styled.div`
width: 100%;
background: rgb(107, 106, 106,0.6);
position: absolute;
inset: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
`;
export const PopUpBox = styled.div`
width: 390px;
height: 436px;
border-radius: 15px;
background: #FFF;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
align-items: center;
justify-content: center;
@media (max-width:450px){
    width: 90%;
}
`;
export const PopUpBoxHeading = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    color: #0F0B03;
    text-align: center;
    font-family: 'Satoshi';
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  span{
    color: var(--Gray, #8B8989);
    text-align: center;
    font-family: 'Satoshi';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 185%;
  }
`;
export const PopUpBoxRating = styled.div`
display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const PopUpBoxMessage = styled.div`
width: 352px;
height: 128px;
flex-shrink: 0;
border-radius: 10px;
border: 2px solid #E0E4F5;
background: #FFF;
position: relative;
input{
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
}
@media (max-width:450px){
    width: 100%;
}
`;
export const PopUpBoxBtn = styled.div`
button{
    width: 350px;
    height: 55px;
    flex-shrink: 0;
    background: #3563E9;
    cursor: pointer;
    color: #FFF;
    text-align: center;
    font-family: 'Satoshi';
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
}
@media (max-width:450px){
    button{
        width: 300px;
    }
}
`;