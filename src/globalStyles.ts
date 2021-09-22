import { createGlobalStyle } from "styled-components";
import ArvoWoff from "./fonts/Arvo.woff";
import ArvoWoff2 from "./fonts/Arvo.woff";

export const primaryColor = "#31004a";
export const primaryColorRgb = "rgb(49, 0, 74)";
export const secondaryPurple = "#33007b";
export const lightPurple = "#ab00ff";
export const lightBlue = "#4287f5";
export const accentGrey = "#95989e";

export const GlobalStyle = createGlobalStyle`
@font-face {
      font-family: 'Arvo';
      src: local('Arvo'), local('Arvo'),
      url(${ArvoWoff2}) format('woff2'),
      url(${ArvoWoff}) format('woff');
      font-style: normal;
}

* {
    margin: 0;
    box-sizing: border-box;
    font-family: "Arvo";
}

body {
    width: 100vw;
    height: 100vh;
}
`;
