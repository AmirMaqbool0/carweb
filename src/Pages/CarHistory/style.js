import styled from 'styled-components'
export const CarHistoryContainer = styled.div`
width: 100%;
height: fit-content;
background: #f6f7f9;
display: flex;
flex-direction: column;
gap: 30px;
`;
export const CarHistoryBox = styled.div`
width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const CarHistoryHeading = styled.div`
display: flex;
  flex-direction: column;
  gap: 10px;
  h1{
    color: #000;
  text-align: center;
  font-family: "Plus Jakarta Sans";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.48px;
  }
  span{
    color: var(--Secondary-300, var(--gray, #90a3bf));
    text-align: center;
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.32px;
  }
`;
export const HisoryCarCardSection = styled.div`
display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
`;