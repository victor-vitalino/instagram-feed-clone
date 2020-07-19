import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;

    }
    body{
        background: #fafafa;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased !important;
    }

`;
