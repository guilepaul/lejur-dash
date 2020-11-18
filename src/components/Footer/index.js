import React from "react";

import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import linkedin from "../../assets/linkedin.png";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      {/* <S.MediaWrapper> */}
      {/* <S.Text>
        Encontre e contrate o fornecedor ideal para o seu casamento.
      </S.Text> */}
      <S.Text>Feito com amor e carinho para ganhar o shape da FIAP</S.Text>
      <S.SocialMedia>
        <img src={insta} alt="insta" sizes={50} />
        <img src={face} alt="insta" sizes={50} />
        <img src={linkedin} alt="insta" sizes={50} />
      </S.SocialMedia>
      {/* </S.MediaWrapper> */}
    </S.Container>
  );
};

export default Footer;
