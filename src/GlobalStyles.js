import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background: #202020;
        font-size: 62.5%;
        font-family: 'Source Sans Pro', sans-serif;
    }
    a {
        text-decoration: none;
        color: white;
    }
    .weapon-container {
        width: 85%;
        padding-top: 3rem;
        margin-left: 15rem;
        display: flex;
        flex-wrap: wrap;
    }

`;

export default GlobalStyles;
