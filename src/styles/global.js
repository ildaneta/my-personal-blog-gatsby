import { createGlobalStyle } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates&display=swap');

@import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


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
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: var(--background);
    font-size: 100%;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.075rem;
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
  *{
    box-sizing: border-box;
  }
  img{
    display: block;
    width: 100%;
    height: auto;
  }

  body.dark{
    --colorLettersComments: #DFE2E5;
    --white: #fff;
    --rose: #f7a5a6;
    --background: #282a36;
    --mediumBackground: #282a36;
    --colorLetters: #DFE2E5;
    --colorIcons: #fcf2f2;
    --hover: #f7a5a6;
    --hoverRecommended: #22242d;
    --linkColor: #f7a5a6;
    --searchColor: #dbdbdb;
    --placeholderSearch: #dbdbdb;
    --inputColorSearch: #f7a5a6;
    --iconColor: #363636;
    --backgroundIcons: #e5e3e3;
    --colorBorder: #DFE2E5;
  }

  body.light{
    --colorLettersComments: #363636;
    --white: #fff;
    --rose: #f7a5a6;
    --background: #f9f9f9;
    --mediumBackground: #fcf2f2;
    --colorLetters: #363636;
    --colorIcons: #333;
    --hover: #f7a5a6;
    --hoverRecommended: #f77394;
    --linkColor: #f77394;
    --searchColor: #f77394;
    --placeholderSearch: #333;
    --inputColorSearch: #f77394;
    --iconColor: #363636;
    --backgroundIcons: #fcf2f2;
    --colorBorder: #333;
  }

`;
export default GlobalStyle;
