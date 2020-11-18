import React from 'react'
import logo from '../../assets/logowhite.png'

import * as S from './styles'

const Header = ({path}) => {
    return(
        <>
            <S.LogoWrapper>
                <img src={logo} alt="logo" />
                <S.TextHeader>
                    {path}
                </S.TextHeader>
            </S.LogoWrapper>
        <S.Container />
            </>
    )
}


export default Header