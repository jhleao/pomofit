import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
:root{
  --white: #fff;
  --red: #E83F5B;
  --green: #4CD62B;
  --blue: #5965E0;
  --darkBlue: #4953B8;
  --twitterBlue: #2AA9EA;

  --lightBackground: #F2F3F5;
  --lightLine: #DCDDE0;
  --lightText: #666666;
  --lightTextHighlight: #B3B9FF;
  --lightTitle: #2E384D;

  --darkBackground: #222;
  --darkLine: #DCDDE0;
  --darkText: #F2F3F5;
  --darkTextHighlight: #B3B9FF;
  --darkTitle: #112142;

  --primary: #b91d00;
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


*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  background: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};
  font-family: Inter, serif;
}
`;

export default GlobalStyles;
