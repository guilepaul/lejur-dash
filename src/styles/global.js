import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Lato;
    }

    body {
        background: #ffff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Lato, sans-serif;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 10px;
    }

    button {
        cursor: pointer;
    }
`