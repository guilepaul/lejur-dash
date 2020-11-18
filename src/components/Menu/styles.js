import styled from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`

    position: absolute;
    width: 200px;
    height: 600px;
    top: 370px;
    display: flex;
    flex-direction: column;

/* Branco */

background: #ffff;
/* Sombras/Botões/Hover/Cinza */

box-shadow: 0px 3px 10px rgba(88, 88, 88, 0.1), 0px 16px 31px rgba(88, 88, 88, 0.1);
`
export const LogoWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 30px 0;

    img {
        max-width: 140px;
    }
`

export const ItemMenu = styled.div`
    display: flex;

    font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 156%;
align-items: center;
margin: 20px 0;
/* identical to box height, or 28px */


/* Texto/Cinza Escuro - 2 */

color: #585858;

    img {
        margin: 0 20px;
        height: 22px;
        width: auto;
    }
`
export const Separator = styled.div`
    height: 0px;
    width: 96%;
    align-self: center;

/* Cinza Claro - 1 */

border: 1px solid #E0E0E0;

`
export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 12px;
    margin: 20px 0;

`

export const LinkItem = styled(Link)`
    text-decoration: none;
    text-decoration-color: none;
    color: #585858;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        text-decoration-color: none;
    }
`
