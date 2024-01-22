import  { styled } from 'styled-components'

export const HomeContainer = styled.div`
background: #f6f7f9;
display: flex;
flex-direction: column;
overflow: hidden;
`;
export const CarCards = styled.div`
width: 100%;
padding: 30px;
display: flex;
overflow: hidden;
flex-direction: column;
@media (max-width: 570px){
    height: fit-content;
    padding: 30px;
}
`;
export const CarCardsTop=styled.div`
display: flex;
justify-content: space-between;
width: 100%;
  span{
    color: #90a3bf;
    font-family: " Plus Jakarta Sans";
  };
  span a{
    text-decoration: none;
    color: #3563e9;
    font-family: " Plus Jakarta Sans";
  };
`;
export const CarCardBoxeses =styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media (max-width: 620px){
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;
export const ServicesSection = styled.section`
padding: 30px;
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
@media (max-width: 1120px){
    margin-top: 100px;
    margin-bottom: 100px;
}
@media (max-width: 570px){
    height: fit-content;
}
`;
export const ServicesBox = styled.div`
width: 1299px;
  height: 528px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  @media (max-width: 1120px){
    height: fit-content;
    padding-bottom: 50px;
  }
`;
export const ServicesHeading = styled.div`
text-align: center;
h3{
    color: #000;
  text-align: center;
  font-family: "Poppins";
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

}
@media (max-width: 620px){
    h3{
        font-size: 26px;
    }
}
`;
export const ServicesCards = styled.div`
display: flex;
  gap: 100px;
  @media (max-width: 1120px){
    gap: 20px;
    flex-direction: column;
  }
`;
export const ServicesCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
export const ServicesCardLogo = styled.div`
width: 144px;
  height:120px; 
  background: url(${(props)=> props.imgurl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ServiceCardHeading = styled.div`
h3{
    color: var(--blue, #3563e9);
    text-align: center;
    font-family: "Poppins";
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

`;
export const ServiceCardText = styled.div`
display: flex;
align-items: center;
justify-content: center;
span{
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-family: "Roboto";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
}
`;
export const SubscribeSection =styled.div`
display: flex;
  align-items: center;
  justify-content: center;
`;
export const SubscribeContainer = styled.div`
width: 1299px;
height: 500px;
padding: 30px;
gap: 100px;
margin-bottom: 50px;
position: relative;
background: black;
&:before{
    content: "";
    background: url(${(props)=> props.subimg});
    position: absolute;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    inset: 0;
};
@media (max-width: 1120px){
    width: 90%;
}
`;
export const SubscribeText = styled.div`
isolation: isolate; 
    h1{
        width: 750px;
        height: 111px;
        color: #fff;
        font-family: "Poppins";
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 110%; /* 44px */
        text-transform: capitalize;
    }
    h2{
        color: #fff;
        font-family: "Poppins";
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-transform: capitalize;
    }
    @media (max-width: 1120px){
        h1{
            font-size: 30px;
        }
        h2{
            font: 30px;
        }
    }
    @media (max-width: 820px){
        h1{
            font-size: 20px;
        }
        h2{
            font: 20px;
        }
    }
    @media (max-width: 570px){
        h1{
            font-size: 16px;
        width: 250px;
        }
        h2{
            font-size: 16px;
        }
    }
`;
export const SubscribeInput =styled.div`

`;
export const SubscribeInputText = styled.div`
span{
    color: #fff;
  font-family: "Roboto";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  isolation: isolate;
};
@media (max-width: 1120px){
    span{
        font-size: 20px;
    }
}
@media (max-width: 820px){
    span{
        font-size: 20px;
    }
}
@media (max-width: 570px){
    span{
        font-size: 16px;
    }
}
`;
export const SubscribeInputBox = styled.div`
width: 958px;
  height: 93px;
  border-radius: 17px;
  background: white;
  padding: 0px 10px 0px 10px;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  input{
    width: 80%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: 30px;
  };
  button{
    width: 170px;
    height: 81px;
    flex-shrink: 0;
    border-radius: 17px;
    background: var(--blue, #3563e9);
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;
  };
  @media (max-width: 1120px){
    width: 658px;
    height: 63px;
    padding: 0px 10px 0px 10px;
    button{
        width: 110px;
        height: 51px;
    
        font-size: 30px;
    }
  }
  @media (max-width: 820px){
    width: 458px;
    height: 63px;
    padding: 0px 10px 0px 10px;
  }
  @media (max-width: 570px){
    width: 258px;
    height: 43px;
    padding: 0px 5px 0px 5px;
    button{
        width: 80px;
        height: 31px;
    
        font-size: 16px;
    }
    input{
        font-size: 16px;
    }
  }
`;