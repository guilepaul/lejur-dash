import styled from 'styled-components'


export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
    flex-direction: column;
    background-color: #ffff;
    margin-bottom: 1040px;
    font: Lato;
`
export const ChartBannerWrapper = styled.div`
    height: 350px;
    width: 100%;
    margin-top: 40px;
    align-self: flex-end;
    border-radius: 25px;
    padding: 0 20px 5px 2px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 0px 4px 12px rgba(88, 88, 88, 0.1), 0px 18px 31px rgba(88, 88, 88, 0.1);
`

export const ContainerSquareChart = styled.div`
    display: flex;
    width: 75%;
    margin-top: 40px;
    align-self: flex-end;
    flex-direction: row;
    justify-content: space-between;
    /* padding: 10px; */
    /* background-color: red; */
`

export const ChartSquareWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
    height: auto;
    border-radius: 25px;
    background-color: #fff;
    padding: 10px 20px 10px 20px;
    z-index: 99;
    box-shadow: 0px 4px 12px rgba(88, 88, 88, 0.1), 0px 18px 31px rgba(88, 88, 88, 0.1);
`
export const ChartSquareWrapperDouble = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    border-radius: 25px;
    background-color: #fff;
    padding: 10px 20px 10px 20px;
    z-index: 99;
    box-shadow: 0px 4px 12px rgba(88, 88, 88, 0.1), 0px 18px 31px rgba(88, 88, 88, 0.1);
`

export const LabelChart = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #585858;
`