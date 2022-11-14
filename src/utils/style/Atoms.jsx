import styled, { keyframes } from "styled-components";
import '@fontsource/roboto';
import { Link } from "react-router-dom";
import colors from "./color";

export const StyledLink = styled(Link)`
       padding:8px 20px 8px 20px;
       color:${({theme})=> theme === 'dark' ? colors.backgroundLight: '#8186a0'};
       text-decoration:none;
       margin-right:1em;
       font-size: 18px;
       font-family: roboto;
       ${(props) =>
           props.$isFullLink &&
           `color:white; border-radius:30px; background-color:${colors.primary};`}
`
const rotate= keyframes`
   from {
     transform:rotate(0deg);
   }
   to{
    transform:rotate(360deg);
   }
`
export const Loader = styled.div`
      padding:10px;
      border: 6px solid ${colors.primary};
      border-bottom-color:transparent;
      border-radius:22px;
      animation:${rotate} 1s infinite linear;
      height:0;
      width:0;

`
export const ImgWrapper= styled.div`
    align-self:center;
    margin-top:2em;
    margin-bottom:2em;
`
 export const ErroContainer= styled.div`
      width: 80%;
      height:60vh;
      margin: 0 auto;
      margin-top:4em;
      padding:24px;
      display: flex;
      flex-direction:column;
      align-items: center;
      background-color:${({theme})=> theme === 'dark' ? colors.backgroundDark:colors.backgroundLight}
      
`
export const LabelSpan = styled.span`
      font-size:16px;
      font-weight:700;
`