import styled from 'styled-components'

export const Conatiner = styled.div`
display: flex;
width: 75%;
height: 120px;
margin-top: 20px;
align-self: flex-end;
padding: 0 30px;
justify-content: space-between;

background: #ffff;
box-shadow: 0px 4px 12px rgba(88, 88, 88, 0.1), 0px 18px 31px rgba(88, 88, 88, 0.1);
border-radius: 25px;
`

export const Indicator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        margin: 0 20px;
        height: 30px;
        width: auto;
    }
`

export const ValueIndicator = styled.div`
    display: flex;

    font-family: Lato;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;

    color: #585858;
`
export const LabelIndicator = styled.div`
    display: flex;
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;

    color: #585858;
`

export const Separator = styled.div`
    width: 0px;
    height: 75%;
    align-self: center;
    margin: 0 20px;

/* Cinza Claro - 1 */

border: 1px solid #E0E0E0;
`