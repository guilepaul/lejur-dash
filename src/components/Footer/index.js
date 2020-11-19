import React from "react";

import insta from "../../assets/insta.png";
import face from "../../assets/face.png";
import linkedin from "../../assets/linkedin.png";

import * as S from "./styles";

const Footer = () => {
  return (
    <S.Container>
      <S.MediaWrapper>
        <S.Text>Feito com amor e carinho para ganhar o shape da FIAP</S.Text>
        <S.SocialMedia>
          <img src={insta} alt="insta" size={40} />
          <img src={face} alt="insta" size={40} />
          <img src={linkedin} alt="insta" size={40} />
        </S.SocialMedia>
      </S.MediaWrapper>
    </S.Container>
  );
};

export default Footer;
