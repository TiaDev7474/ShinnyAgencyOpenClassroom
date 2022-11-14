import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ImgAside from '../../assets/AsideImg.svg'
import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/color";

const HomeContainer= styled.div`
      width: 80%;
      height:70vh;
     
      margin:0 auto;
      margin-top:3em;
      display: flex;
      flex-direction:row;
      align-items: center;
      flex-wrap:wrap;
      justify-content: space-around;
      background-color:${({theme})=> 
      theme === 'dark' ? colors.backgroundDark : colors.backgroundLight
    }
`
const Paragraph = styled.p`
    width: 500px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 86px;
    color:${({theme})=>
     theme === 'dark' ? colors.backgroundLight : colors.GrandTitle}
`
const ImgWrapper= styled.div`
    align-self:center;
    width:auto;
    margin-top:3em;
`
const StyledLink = styled(Link)`
       padding:9px 38px;
       color:#8186a0;
       text-decoration:none;
       font-size: 18px;
       font-family: roboto;
       align-self:flex-start;
       ${(props) =>
           props.$isFullLink &&
           `color:white; border-radius:30px; background-color:${colors.primary};`}
`
const Wrapper= styled.div `

     Display:flex;
     flex-direction:column;
     align-items:center;  
`



function Home() {
    const {theme} = useTheme()
   
   
  return (
   
    
      <HomeContainer theme={theme}>
          <Wrapper>
             <Paragraph theme={theme}>
              Repérez vos besoins,
              on s’occupe du reste, <br/>avec les meilleurs <br/>talents
              </Paragraph>
             <StyledLink to="/survey/1" $isFullLink>faire les tests</StyledLink>
          </Wrapper>
          <ImgWrapper>
              <img src={ImgAside} alt="Resume vector"/>
          </ImgWrapper>
      </HomeContainer>
      

  )
}

export default Home;
