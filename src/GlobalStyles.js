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
        padding: 3rem 15rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

`;

export default GlobalStyles;
