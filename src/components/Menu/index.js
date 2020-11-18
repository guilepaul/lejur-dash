import React from 'react'


import Button from '../Button'

import logo from '../../assets/lejourFastLogo.png'
import home from '../../assets/homeIcon.png'
import schedule from '../../assets/scheduleIcon.png'
import costumer from '../../assets/costumerIcon.png'
import dash from '../../assets/dashIcon.png'
import business from '../../assets/businessIcon.png'

import * as S from './styles'

const Menu = () => {
    return(
        <S.Container>
            <S.LogoWrapper>
                <img src={logo} alt="logo lejour fast" />
            </S.LogoWrapper>
            <S.ItemMenu>
                <img src={home} alt="home" />
                Início
            </S.ItemMenu>
            <S.Separator />
            <S.ItemMenu>
            <S.LinkItem to={'/'}  >
                <img src={dash} alt="Dash" />
                Dashboard
                </S.LinkItem>
            </S.ItemMenu>
            <S.ItemMenu>
                <S.LinkItem to={'/marketing'}  >

                <img src={costumer} alt="Usuários" />
                Marketing
                </S.LinkItem>
            </S.ItemMenu>
            <S.ItemMenu>
                <img src={business} alt="fornecedores" />
                Financeiro
            </S.ItemMenu>
            <S.ItemMenu>
                <img src={schedule} alt="agenda" />
                Agenda
            </S.ItemMenu>
            <S.Separator />
            <S.ButtonWrapper>
            <Button />
            </S.ButtonWrapper>
        </S.Container>
    )
}

export default Menu