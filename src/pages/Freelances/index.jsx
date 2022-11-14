
import React, {useEffect , useState}from "react";
import Card from '../../Components/Card';
import styled from 'styled-components';
import { Loader } from '../../utils/style/Atoms';
import colors from "../../utils/style/color";
import { useTheme } from "../../utils/hooks";





const CardContainer = styled.div `
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      justify-content:center;
      width:50%;
      margin:0 auto;
    


 `
/* const CardsContainer = styled.div`
        display: grid;
        gap: 24px;
        grid-template-rows: 350px 350px;
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
        justify-items: center;
`*/
 const PageTitle = styled.h1`
      
        font-size: 30px;
        color: ${({theme})=> theme === 'dark' ? colors.backgroundLight: colors.backgroundDark};
        text-align: center;
        padding-bottom: 30px;
      
    
 `
 const PageSubtitle =styled.h2`
        font-size: 20px;
        color:${({theme})=> theme ==='dark'? colors.backgroundLight: colors.secondary};
        font-weight: 300;
        text-align: center;
        padding-bottom: 30px;
 
 `
 const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`



function Freelances(){
    const [freelancersList, setFreelancersProfil]=useState([])
    const [isDataLoading,setDataLoading] = useState(false)
    const [error , setError]=useState(false)
    const {theme}= useTheme()


    useEffect(()=>{
        setDataLoading(true)
        fetch("http://localhost:8000/freelances")
            .then((response)=> response.json())
            .then(({freelancersList})=>{
                 setFreelancersProfil(freelancersList)
                 setDataLoading(false)
            })
            .catch((error)=>{
                console.log(error)
                setError(true)
            })
    },[])
  
    if (error){

        return <span>Oups il y a eu un probleme</span>
     }
 
    return (
      
       <div>
             <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
            <PageSubtitle theme={theme}>Chez shinny nous reunissons les meilleurs profils pour vous</PageSubtitle>
           
            <CardContainer>
                {isDataLoading ? (
                    <LoaderWrapper>
                         <Loader/>
                    </LoaderWrapper>
                   
                    ):(
                    freelancersList.map( (profil,index)=> (
                        <Card 
                        key={`${profil.name}-${index}`}
                        label={profil.job} 
                        picture={profil.picture}
                        title={profil.name} 
                        />
                        
                    ))
                )}
               
            </CardContainer>
    
       </div>
    )
}
export default Freelances

