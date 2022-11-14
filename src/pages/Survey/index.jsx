import React from "react";
import {useParams ,Link} from 'react-router-dom'
import {  useContext} from "react";
import styled from "styled-components";
import { Loader } from "../../utils/style/Atoms";
import colors from "../../utils/style/color";
import { SurveyContext } from "../../utils/Context";
import { useFetch, useTheme } from "../../utils/hooks";
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color:${({theme})=> theme ==='light'? 'black': 'white'}
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme})=> theme === 'light'?colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
function Survey(){

   /* const [surveyData,setSurveyData] = useState([])
    const [isDataLoading , setDataLoading]= useState(false)
    const [error , setError]=useState(false)*/
   
    const {questionNumber} = useParams()
    const questionNumberInt = parseInt(questionNumber);
    const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1 ;
    const nextQuestionNumber = questionNumberInt + 1;
    const {saveAnswers,answers}= useContext(SurveyContext)
   const {theme} = useTheme()

  /*  useEffect(()=>{
        setDataLoading(true)
        fetch("http://localhost:8000/survey")
              .then((response)=>response.json())
              .then(({surveyData})=>{
                setSurveyData(surveyData)
                setDataLoading(false)
                
              })
              .catch((error)=>console.log(error))
    },[])*/
    function saveReply(answer) {
        saveAnswers({[questionNumber]: answer })
      }
    
     /* useEffect(() => {
        async function fetchSurvey() {
          setDataLoading(true)
          try {
            const response = await fetch(`http://localhost:8000/survey`)
            const { surveyData } = await response.json()
            setSurveyData(surveyData)
          } catch (err) {
            console.log(err)
            setError(true)
          } finally {
            setDataLoading(false)
          }
        }
        fetchSurvey()
      }, [])/*/
      const {data ,isLoading,error}= useFetch("http://localhost:8000/survey")
      const {surveyData} = data
      if (error) {
        return <span>Oups il y a eu un problème</span>
      }
    
      return (
        <SurveyContainer theme={theme}>
          <QuestionTitle>Question {questionNumber}</QuestionTitle>
          {isLoading ? (
            <Loader />
          ) : (
            <QuestionContent>
                {surveyData && surveyData[questionNumber]}
            </QuestionContent>
          )}
            {answers &&
                <ReplyWrapper >
                    <ReplyBox
                     theme={theme}
                    onClick={() => saveReply(true)}
                    isSelected={answers[questionNumber] === true}
                    >
                       Oui
                    </ReplyBox>
                    <ReplyBox
                     theme={theme}
                    onClick={() => saveReply(false)}
                    isSelected={answers[questionNumber] === false}
                    >
                       Non
                    </ReplyBox> 
                </ReplyWrapper>
            } 
          <LinkWrapper>
            <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
            {surveyData && surveyData[questionNumberInt + 1] ? (
              <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinkWrapper>
         
        </SurveyContainer>
      )
    }
    
export default Survey;