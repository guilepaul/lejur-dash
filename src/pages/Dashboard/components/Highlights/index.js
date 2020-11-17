import React from 'react'

import icon from '../../../../assets/profileIcon.png'

import * as S from './styles'

const Highlights = () => {
    return(
        <S.Conatiner>
            <S.Indicator>
                <img src={icon} alt="tests" />
                <S.ValueIndicator>856</S.ValueIndicator>
                <S.LabelIndicator>Novos Cadastros</S.LabelIndicator>
            </S.Indicator>
            <S.Separator />
            <S.Indicator>
                <img src={icon} alt="tests" />
                <S.ValueIndicator>856</S.ValueIndicator>
                <S.LabelIndicator>Novos Cadastros</S.LabelIndicator>
            </S.Indicator>
            <S.Separator />
            <S.Indicator>
                <img src={icon} alt="tests" />
                <S.ValueIndicator>856</S.ValueIndicator>
                <S.LabelIndicator>Novos Cadastros</S.LabelIndicator>
            </S.Indicator>
            <S.Separator />
            <S.Indicator>
                <img src={icon} alt="tests" />
                <S.ValueIndicator>856</S.ValueIndicator>
                <S.LabelIndicator>Novos Cadastros</S.LabelIndicator>
            </S.Indicator>
        </S.Conatiner>
    )
}

export default Highlights