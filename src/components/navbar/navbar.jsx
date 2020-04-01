import React from "react";
import Styled from "styled-components";
import logo from "../../assets/img/logo.png";


const StyledNavBarVoid = Styled.nav`
    width:100%;
    padding: 0px 20%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#cf092c;
    && > a {color:white !important;}
    @media (max-width:768px){padding:0px 5%;}
`;

const NavBar = () => {
  return (
    <StyledNavBarVoid>
     
        <img src={logo} alt="logo" />
      
      Ayuda
    </StyledNavBarVoid>
  );
};

export default NavBar;
