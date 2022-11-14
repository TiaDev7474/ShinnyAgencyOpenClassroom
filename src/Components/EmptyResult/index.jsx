import EmptyRes from '../../assets/EmptyId.svg'
import { useTheme } from '../../utils/hooks';
import { ErroContainer, ImgWrapper , LabelSpan } from "../../utils/style/Atoms";

export const EmptyResult = ()=>{
    const {theme} = useTheme()
    return(
    <ErroContainer theme={theme}>
          <span>Dommage ...</span>
          <ImgWrapper>
                <img src={EmptyRes} alt="No result" />
          </ImgWrapper>
          <LabelSpan>Il semblerait que vous n'ayez besoun d'aucune compétences</LabelSpan>
    </ErroContainer>
    )

}