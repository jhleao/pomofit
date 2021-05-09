import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  /* --darkBackground: #222;
  --darkLine: #DCDDE0;
  --darkText: #F2F3F5;
  --darkTextHighlight: #B3B9FF;
  --darkTitle: #112142; */

  --primary: #CB2101;
  --darkPrimary: #b91d00;

  --secondary: #162A53;
  --darkSecondary: #0F1C38;

  --white: #fff;
  --red: #F53B3A;
  --green: #4CD62B;

  --lightThemeBackground: #F2F3F5;
  --lightThemeForeground: #fff;
  --lightThemePositive: #4CD62B;
  --lightThemeNegative: #F53B3A;
  --lightThemeOverlay: rgba(255, 255, 255, 0.5);
  --lightThemeLine: #DCDDE0;
  --lightThemeText: #666666;
  --lightThemeTextHighlight: #B3B9FF;
  --lightThemeTitle: #2E384D;

  --darkThemeBackground: #121212;
  /* --darkThemeForeground: #21262D; */
  --darkThemeForeground: #171717;
  --darkThemePositive: #4CD62B;
  --darkThemeNegative: #F53B3A;
  --darkThemeOverlay: rgba(0, 0, 0, 0.5);
  /* --darkThemeLine: #DCDDE0; */
  --darkThemeLine: #21262D;
  --darkThemeText: #C9D1D9;
  --darkThemeTextHighlight: #B3B9FF;
  --darkThemeTitle: #fff;

}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/Inter-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/Inter-SemiBold.ttf");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}

@font-face {
  font-family: "Inter";
  src: url("/fonts/Inter/Inter-Bold.ttf");
  font-style: normal;
  font-weight: 800;
  font-display: swap;
}

@font-face {
  font-family: "Rajdhani";
  src: url("/fonts/Rajdhani/Rajdhani-SemiBold.ttf");
  font-style: normal;
  font-weight: 600;
  font-display: swap;
}

@media screen and (max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media screen and (max-width: 720px){
  html {
    font-size: 87.75%;
  }
}

@media screen and (max-width: 700px){
  html {
    font-size: 75%;
  }
}


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* transition: background 0.1s ease-out, color 0.1s ease-out, background-color 0.1s ease-out; */
}

body {
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  font-family: Inter, serif;
}

h1, h2, h3, h4, h5, h6 {
  color: ${(p) => p.theme.colors.title};
}
`;

export default GlobalStyles;
