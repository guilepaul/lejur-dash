import React from 'react'
import logo from '../../assets/logowhite.png'

import * as S from './styles'

const Header = () => {
    return(
        <>
            <S.LogoWrapper>
                <img src={logo} alt="logo" />
            </S.LogoWrapper>
        <S.Container />
            </>
    )
}


export default Header