import { createGlobalStyle } from "styled-components";
import ArvoWoff from "./fonts/Arvo.woff";
import ArvoWoff2 from "./fonts/Arvo.woff";

export const primaryColor = "#4A148C";
export const secondaryPurple = "#6200EE";
export const darkBlue = "#1A237E";
export const lightPurple = "#ab00ff";
export const lightBlue = "#1976D2";
export const accentRed = "#D50000";
export const accentGrey = "#95989e";
export const yellowWarning = "#FFCC00";

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
