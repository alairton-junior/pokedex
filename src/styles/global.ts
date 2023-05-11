import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #F6F8FC;
        --dark-blue: #10222F;
    }

    * {
        margin: 0;
        padding: 0;
        line-height: 1;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    body {
        background-color: var(--background);
        color: var(--dark-blue);
    }

    
`
