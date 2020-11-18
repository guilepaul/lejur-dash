import styled from 'styled-components'

export const Container = styled.header`
    position: absolute;
    width: 100%;
    height: 65px;
    left: 0px;
    top: 0px;
    /* padding-left: 200px; */


    background: linear-gradient(269.41deg, #DB5D79 0.41%, #E2645A 99.41%);
`

export const LogoWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height:60px;
    width: 100px;
    /* align-self: flex-start; */
    /* background-color: green; */
    z-index: 99;
    margin-top: -26px;
    margin-left: 40px;
`

export const TextHeader = styled.div`

    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-left: 40px;
    color: #ffff;
`