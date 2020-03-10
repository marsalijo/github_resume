import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
        font-family: sans-serif;
        background-color: #f7f8fb;
        color: #434346;
        font-family: 'Ubuntu', sans-serif;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    * {
        outline: none;
    }
    ::placeholder {
        color: #D8D8D8;
    }
    button {
        font-family: 'Ubuntu', sans-serif;
    }
    a {
        color: #EC174D;
        transition: color .1s ease-in;
    }
    a:hover {
        rgba(236, 23, 77, 0.80);
    }
    p {
        line-height: 1.5;
        font-size: 20px;
    }
    #root {
        position: relative;
        min-height: 100vh;
    }
    .visuallyhidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }
    @media (max-width: 1200px) {
        p {
            font-size: 16px;
        }
    }
    @media (max-width: 640px) {
        p {
            font-size: 12px;
        }
    }
`
export default GlobalStyle;