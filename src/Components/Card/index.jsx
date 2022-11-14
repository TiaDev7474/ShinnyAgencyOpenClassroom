import PropTypes from 'prop-types'
import React from "react";
import defaultPicture from '../../assets/image.jpg'
import styled from 'styled-components';
import colors from '../../utils/style/color';
import { useTheme } from '../../utils/hooks';
/*const  CardLabel = styled.span `
    color: #5843e4;
    font-size: 16px;
    ${(props)=>
        props.isTitle && 
        `font-size: 20px; font-weight:bold`
    }
    ${(props)=>
         props.isLeft &&
         `align-self:flex-start`
    }
   
`*/
const CardLabel = styled.span`
  color:${({theme})=> theme === 'dark' ? colors.backgroundLight: colors.primary};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.span`
  color:${({theme})=> theme === 'dark' ? colors.backgroundLight: 'black'};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`
const CardImage= styled.img`
    height: 150px;
    width: 150px;
    border-radius:50%;
    align-self:center;
   
`

const Wrapper= styled.div`
    display: flex;
    flex-direction: column ;
    padding: 18px;
    align-items:center;
    justify-content:space-around;
    background-color:${({theme})=>
     theme ==='dark' ? colors.backgroundDark: colors.backgroundLight};
    width:250px;
    height:250px;
    margin:1em;
    transition:200ms;
    border-radius:30px;
    &:hover{
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
        transform: scale(1.2);
    }
    
`

function Card({label , title , picture}) {
    const {theme} = useTheme()

    return(
        <Wrapper theme={theme}>
            <CardLabel theme={theme}>{label}</CardLabel>
            <CardImage src={picture} alt="freelance"/>
            <CardTitle  theme={theme}>{title}</CardTitle>
        </Wrapper>
    )
 
}
Card.propTypes = {
    label:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired
}
Card.defaultProps ={
    title:"",
    label:"",
    picture: defaultPicture
}
   




export default Card