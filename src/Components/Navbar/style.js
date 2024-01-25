import styled from'styled-components'
  export const NavbarContainer = styled.div`
  width: 100%;
  height: 130px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  overflow: hidden;
  list-style: none;
  `;
  export const NavbarLogo = styled.div`
  @media (max-width: 480px){
    width: 100px;
    height: 100px;
    overflow: hidden;
    img{
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
  }
  `;
  export const NavBarMain = styled.div`
${(props)=> props.nav == 'nav-link'?(
`  ul{
    display: flex;
  list-style: none;
  gap: 40px;
  position: relative;
   }
   li{
    position: relative;
   }
   a{
    text-decoration: none;
  color: black;
  color: #000;
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
   }
   .active {
    position: relative;
    &:before{
        content: "";
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: #5eabff;
        border-radius: 10px;
        display: block;
    }
  }
  @media (max-width: 820px){
    display: none;
  }
`

):(
    `
    @media (max-width: 820px){
        width: 100%;
        height: 400px;
        background: black;
        position: absolute;
        top: 100px;
        left: 0;
        z-index: 1;
        ul{
            display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    gap: 70px;
    list-style: none;
        }
        a{
            color: white !important;
            text-decoration: none;
            color: black;
            color: #000;
            font-family: "Poppins";
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration: none;
        }
        li{
            position: relative;

            &:before{
                content: "";
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background: #5eabff;
    border-radius: 10px;
            }
        }
    }
    `
)}
 
  
  
  `;
  export const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #5eabff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  `;
  export const User1 = styled.div`
  gap: 20px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    color: #000;
    font-family: "Roboto";
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  `;
  export const MenuBtn = styled.div`
  display: none;
  @media (max-width: 820px){
    display: block;
    cursor: pointer;
  }
  `;
  
  
  export const MainHideShow = styled.div`

  ${(props)=> props.option =='hide-profile'? (

    ` display: none;`
  ):(`   width: 210px;
  height: 229px;
  border-radius: 10px;
  background: #fff;
  position: absolute;
  top: 140px;
  right: 50px;
  z-index: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;`)}
  .hide-profile{
   
  }
  .profile-option{
 
  }
  `;

  export const ProfileCardUserLogoName = styled.div`
  display: flex;
  gap: 20px;
  `;
  export const ProfileCardUserLogo = styled.div`
  width: 39px;
  height: 39px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: blue;
  `;
  export const ProfileCardUserName = styled.div`
  display: flex;
  flex-direction: column;
  h1{
    color: var(--HEading, #222);
    font-family: "Poppins";
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
  }
  span{
    color: var(--HEading, #222);
    font-family: "Poppins";
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 225% */
    cursor: pointer;
  }
  `;
  export const ProfileCardLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  `;
  export const ProfileCardLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span{
    color: var(--HEading, #222);
    font-family: "Poppins";
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 180% */
    cursor: pointer;
  }
  `;