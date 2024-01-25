import styled from 'styled-components'
export const VehicleContainer = styled.div`
width: 100%;
height: fit-content;
background: #f6f7f9;
`;
export const VehicleListBox = styled.div`
display: flex;
  padding: 30px;
  gap: 20px;
  @media (max-width: 780px){
    display: flex;
    flex-direction: column;
  }
`;
export const VehicleListLeft = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
width: 25%px;
// background:white;
padding:30px;
@media (max-width: 780px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export const DropDownBtn = styled.div`
.dropdown{
    width: 350px;
    height: 50px;
    padding: 10px;
    border-radius: 5px;
    background: var(--white, #fff);
    display: flex;
    align-items: center;
    justify-content: center;
}
@media (max-width: 480px){
    .dropdown{
        width: 250px;
        height: 50px;
    }
}

`;
export const PriceRange = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 480px){
    width: 250px;
}
`;
export const PriceRangeHeading = styled.div`
h1{
    color: var(--Black, #333);
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
span{
    color: var(--Black, #333);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;
export const PriceRangeMeter = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
position: relative;
`;
export const PriceRangeMeterText = styled.div`
width: 343px;
display: flex;
justify-content: space-between;
@media (max-width: 480px){
    width: 250px;
}
`;
export const PriceRangeMeterBar = styled.div`
width: 343px;
display: flex;
align-items: center;
justify-content: space-between;
span{
    width: 18px;
    height: 18px;
    background: var(--blue, #3563e9);
    stroke-width: 2px;
    stroke: var(--white, #fff);
    border-radius: 50%;
}
h3{
    background: #3563e9;
    width: 333px;
    height: 2px;
}
@media (max-width: 480px){
    width: 250px;
}
`;
export const MinMaxRange =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: start;
span{
    color: var(--gray, #a3aaae);
    text-align: right;
    font-family: "Poppins";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;
export const VehicleListBtn =styled.div`
width: 354px;
height: 59px;
background: var(--blue, #3563e9);
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
span{
    color: #fff;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
}
@media (max-width: 480px){
    width: 250px;
}
`;
export const Right =styled.div`
display: flex;
flex-wrap: wrap;

width: 75%;
align-items: center;
justify-content: space-around;
@media (max-width: 780px){
    width: 100%;
    display: flex;
    align-items: center;
}
`;
export const Condition =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const ConditionHeading =styled.div`
span{
    color: var(--Black, #333);
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
`;
export const ConditionBox =styled.div`
display: inline-flex;
padding: 9px 14px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background: var(--white, #fff);
span{
    color: var(--Black, #333);
    font-family: "Poppins";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;
export const ConditionBoxes =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`;
export const Fule =styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const FuleHeading =styled.div`
span{
    color: var(--Black, #333);
    font-family: "Poppins";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;
export const FuleBoxes =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
gap: 10px;
`;
export const FuleBox =styled.div`
display: inline-flex;
padding: 9px 14px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 5px;
background:  #fff;
span{
    color: var(--Black, #333);
    font-family: "Poppins";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
`;