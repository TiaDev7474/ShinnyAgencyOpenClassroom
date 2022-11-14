import React ,{useContext} from "react";
import { SurveyContext } from "../../utils/Context";
import { useFetch, useTheme } from "../../utils/hooks";
import styled from "styled-components";
import { Loader } from "../../utils/style/Atoms";
import colors from "../../utils/style/color";
import { StyledLink } from "../../utils/style/Atoms";
import { Link } from "react-router-dom";
import { EmptyResult } from "../../Components/EmptyResult";


const LoadingWrapper = styled.div`
     display:flex;
     justify-content: center;


`
const ResultsContainer= styled.div`
     display: flex;
     background-color:${({theme})=> 
      theme ==='dark' ? colors.backgroundDark : colors.backgroundLight};
     flex-direction: column;
     align-items: center;
     margin: 60px 90px;
     padding: 30px;
    
`
const ResultTitle = styled.h1`
   
      color: ${({theme}) => theme ==='dark' ? '#FFFFFF' :'black'};
      font-weight: bold;
      text-align:center;
      max-width:60%;
      font-size: 28px;
      margin-bottom: 2em;
      & > span {
          padding-left: 10px;
      }
      
     


`
const JobTitle = styled.span`
     
     
    color: ${({theme})=> theme === 'dark' ? colors.backgroundLight: colors.primary};
    text-transform : uppercase;

`
const Jobdescription= styled.div`
     font-size: 18px;
     & > p {
          color: ${({theme})=> (theme === 'dark' )? '#fffff': colors.secondary}
          margin-block-start: 5px;
     }
     & > span{
          font-size: 20px;
     }

`
const DescriptionWrapper = styled.div`
   padding:60px;


`
const Styledlink = styled(Link)`
       color: ${({theme})=> 
       (theme === 'dark' ) ? colors.backgroundLight : colors.secondary};
`
const ErrorSpan= styled.span`
       display:flex;
       justify-content: center;

`












function formtQueryParams(answers){
   const answerNumbers= Object.keys(answers)

   return answerNumbers.reduce((previousParams,ansewerNumber,index)=>{
     const isFirstAnswer= index === 0;
     const separater = isFirstAnswer ? "": '&'
      return `${previousParams}${separater}a${ansewerNumber}=${answers[ansewerNumber]}`
   },'')
}   

function Results(){
    const {answers}=useContext(SurveyContext)
    const queryParams= formtQueryParams(answers)
    const {theme} = useTheme()

    const {data , isLoading, error}= useFetch(`http://localhost:8000/results?${queryParams}`)

    if (error){

     return <ErrorSpan>Oups il y a eu un probleme</ErrorSpan>
  }
   
    return isLoading ? (
                <LoadingWrapper>
                     <Loader/>
                </LoadingWrapper>
               ): (
               <ResultsContainer theme={theme}>
                    
                    { data.resultsData.length ===0 ? (
                         <EmptyResult/>
                    ): 
                    <>
                        <ResultTitle theme={theme}>
                        
                        Les compétences dont vous avez besoin:

                         { data.resultsData && data.resultsData.map((result , index) => (
                        <JobTitle theme={theme} key={`${index}-${result.title}`}>
                         {result.title}
                         {index === data.resultsData.length - 1?'': ','}
                        </JobTitle> 
                         ))} 
                         </ResultTitle>
                         <StyledLink to='/freelances' $isFullLink>
                         Découvrez nos profils
                         </StyledLink>
                         <DescriptionWrapper theme={theme}>
                              { data.resultsData.map(( result, index) =>(
                                   <Jobdescription key={`${index}-${result.title}`}>
                                        <JobTitle theme={theme}>{
                                             result.title}
                                        </JobTitle>
                                        <p>{result.description}</p>

                                   </Jobdescription>
                               ))}
                         <Styledlink theme={theme} to='/freelances'>
                              Découvrez nos profils dès maintenant!
                         </Styledlink>
                        
                         </DescriptionWrapper>
                    </>
                      
                    }
                    
                 

                    
                    
                    
                   
                    
               </ResultsContainer>
               )
                
        
       
    
}
export default Results