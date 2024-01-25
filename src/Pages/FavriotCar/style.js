import styled from 'styled-components'
export const FavriotContainer = styled.div`
width: 100%;
height: fit-content;
background: #f6f7f9;
padding: 30px;
display: flex;
flex-direction: column;
gap: 30px;
`;
export const FavriotCardHeader = styled.div`
width: 100%;
display: flex;

height: 100px;
padding: 20px;
align-items: center;
border-radius: 10px;
background: var(--Primary-0, #fff);
span{
    color: var(--Secondary-500, #1a202c);
  font-family: "Plus Jakarta Sans";
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 48px */
  letter-spacing: -0.96px;
}
`;
export const FavriotCards = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 1000px){
    display: flex;
    justify-content: space-around;
}
`;