import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        background: #1B1C1F;
        font-family: Arial, Helvetica, sans-serif;
    }
    a {
        text-decoration: none;
    }

`;

export default GlobalStyles;