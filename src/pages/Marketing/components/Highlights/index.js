import React from "react";

import money from "../../../../assets/moneyIcon.png";
import weddings from "../../../../assets/weddingsIcon.png";
import newUsers from "../../../../assets/newUsersIcon.png";
import newAccess from "../../../../assets/newAccessIcon.png";

import * as S from "./styles";

const Highlights = ({ mediaUsuarios, casamentos }) => {
  return (
    <S.Conatiner>
      <S.Indicator>
        <img src={newAccess} alt="acessos" />
        <S.ValueIndicator>1476</S.ValueIndicator>
        <S.LabelIndicator>Novos Acessos</S.LabelIndicator>
      </S.Indicator>
      <S.Separator />
      <S.Indicator>
        <img src={newUsers} alt="users" />
        {mediaUsuarios && <S.ValueIndicator>{mediaUsuarios}</S.ValueIndicator>}
        <S.LabelIndicator>Novos Usuários</S.LabelIndicator>
      </S.Indicator>
      <S.Separator />
      <S.Indicator>
        <img src={weddings} alt="weddings" />
        {casamentos && <S.ValueIndicator>{126}</S.ValueIndicator>}
        <S.LabelIndicator>Casamentos</S.LabelIndicator>
      </S.Indicator>
      <S.Separator />
      <S.Indicator>
        <img src={money} alt="faturamento" />
        <S.ValueIndicator>R$ 3.5 M</S.ValueIndicator>
        <S.LabelIndicator>Faturamento</S.LabelIndicator>
      </S.Indicator>
    </S.Conatiner>
  );
};

export default Highlights;
