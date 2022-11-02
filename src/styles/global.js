import { createGlobalStyle } from "styled-components";

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap');


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
    background: var(--background);
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    letter-spacing: 0.03125rem;
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

  :root {
    --colorNeutral1: #121212;
    --colorNeutral2: #222;
    --colorNeutral3: #333;
    --colorNeutral4: #555;
    --colorNeutral5: #888;
    --colorNeutral6: #E5E5E5;
    --colorNeutral7: #F1F1F1;
    --colorNeutral8: #FDFDFD;
    --colorNeutral9: #DFE2E5;
    --colorNeutral10: #5F5F5F;
  }

  body.dark{
    --colorLettersComments: #DFE2E5;
    --white: #fff;
    --rose: #f7a5a6;
    --mediumBackground: #282a36;
    --colorIcons: #fcf2f2;
    --hover: #f7a5a6;
    --hoverRecommended: #22242d;
    --linkColor: #f7a5a6;
    --searchColor: #dbdbdb;
    --inputColorSearch: #f7a5a6;
    --iconColor: #363636;
    --backgroundIcons: #e5e3e3;
    
    
    --colorLetters: var(--colorNeutral6);
    --placeholderSearch: var(--colorNeutral9);
    --sidebarBackground: var(--colorNeutral1);
    --background: var(--colorNeutral3);
    --iconsColor: var(--colorNeutral1);
    --backgroundIconsColor: var(--colorNeutral7);
    --colorBorder: var(--colorNeutral9); 
    
  }

  body.light{
    --colorLettersComments: #363636;
    --white: #fff;
    --rose: #f7a5a6;
    
    --mediumBackground: #fcf2f2;
    --colorIcons: #333;
    --hover: #f7a5a6;
    --hoverRecommended: #f77394;
    --linkColor: #f77394;
    --searchColor: #f77394;
    --inputColorSearch: #f77394;
    --iconColor: #363636;
    --backgroundIcons: #fcf2f2;
    
    
    --colorLetters: var(--colorNeutral2);
    --placeholderSearch: var(--colorNeutral3);
    --sidebarBackground: var(--colorNeutral7);
    --background: var(--colorNeutral8);
    --iconsColor: var(--colorNeutral2);
    --backgroundIconsColor: var(--colorNeutral3);
    --colorBorder: var(--colorNeutral3);
  }

`;
export default GlobalStyle;
