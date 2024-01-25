import styled from 'styled-components'
export const FooterContainer = styled.div`
width: 100%;
height: 406px;
background: #081630;
padding: 30px;
display: flex;
flex-direction: column;
gap: 50px;
@media (max-width: 560px){
    height: fit-content;
}
`;
export const FooterBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
export const FooterLeft = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
@media (max-width: 900px){
    display: none;
}
`;
export const FooterLeftLogo = styled.div`
width: 188.679px;
  height: 45px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const FooterLeftContent = styled.div`
width: 292px;
span{
    color: #fff;
    text-align: justify;
  
    /* Medium/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
`;
export const FooterRight = styled.div`
right: 50px;
display: flex;
gap: 30px;
@media (max-width: 560px){
    display: flex;
    flex-wrap: wrap;
    gap: 140px;
}
`;
export const AboutLink = styled.div`
display: flex;
width: 152px;
gap: 15px;
height: 32px;
flex-direction: column;
`;
export const LinkHeading = styled.div`
span{
    color: #fff;
    font-family: "Plus Jakarta Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 30px */
    letter-spacing: -0.4px;
}
`;
export const Links = styled.div`
li{
    color: #fff;
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
    cursor: pointer;
}
ul{
    display: flex;
    flex-direction: column;
    list-style: none;
}
`;
export const ImportentLink = styled.div`
display: flex;
width: 152px;
gap: 15px;
height: 32px;
flex-direction: column;
`;
export const FooterBar = styled.div`
width: 100%;
height: 1px;
background: #fff;
`;
export const FooterRights = styled.div`
width: 292px;
span{
    color: #fff;

    /* Semibold/Type@16 */
    font-family: "Plus Jakarta Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 24px */
    letter-spacing: -0.32px;
}
`;