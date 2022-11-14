import React from "react";
import { useTheme } from "../../utils/hooks";

import styled from "styled-components";
import { StyledLink } from "../../utils/style/Atoms";
import logoDark from '../../assets/dark-logo.png';
import lightLogo from '../../assets/light-logo.png'
import colors from "../../utils/style/color";



const HeaderWrapper = styled.div `
      display:flex;
      flex-direction:row;
      
`
const LogoContainer = styled.div`
      width:25%;
      margin-left:1em;
   
`
const StyledNav= styled.nav`
     display:flex;
     flex-direction:row;
     justify-content:flex-end;
     align-items:center;
     margin-right:5em;
     width:75%;
`
const HeaderImg= styled.img`
     margin-top: 1em;
`
const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
`


function Header(){
    const {theme, toggleTheme} = useTheme()
    const Logo = theme === 'dark' ? lightLogo : logoDark
    return (
        <HeaderWrapper>
            <LogoContainer>
                <HeaderImg src={Logo} alt="logo" />
            </LogoContainer>
            <StyledNav>
                <StyledLink to="/" theme={theme}> Accueil  </StyledLink>
                <StyledLink to="/freelances" theme={theme}>Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink >Faire le test </StyledLink>
                <NightModeButton onClick={()=> toggleTheme()}>
                        {theme ==='light'?'☀️' : '🌙'}
                </NightModeButton>
            </StyledNav>
        </HeaderWrapper>  
    )
}
export default Header