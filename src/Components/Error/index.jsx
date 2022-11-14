import React from "react";
import NotFoundImg from '../../assets/404.svg';

import { ErroContainer, ImgWrapper , LabelSpan } from "../../utils/style/Atoms";

function Error(){

    return (
        <ErroContainer>
              <span>Oups..</span>
              <ImgWrapper>
                    <img src={NotFoundImg} alt="404 not found " />
              </ImgWrapper>
              <LabelSpan>Il semblerait qu'il y a un probeme</LabelSpan>
        </ErroContainer>
    )
}
export default Error