import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
font-weight: 600;
font-family: Rajdhani, sans-serif;
color: ${(p) => p.theme.colors.title};
margin-bottom: 1rem;
cursor: default;

& > *            {margin: 0 0.25rem 0 0.25rem;}
& > *:last-child {margin: 0 0 0 0.25rem;}

& > span {
  font-size: 5rem;
  margin: 0 0.25rem;
}

& div {
  display: flex;
  align-items: center;
  background: ${(p) => p.theme.colors.foreground};
  background: linear-gradient( ${(p) => p.theme.colors.foreground} 30%, ${(p) => p.theme.colors.background} 100%);
  padding: 0 1rem;
  border-radius: 5px;
  padding: 0 0.75rem;
  width: 10.5rem;

  & span {
    font-size: 6.5rem;
    line-height: 6.5rem;
    padding: 0 0.1rem 0 0.1rem; 
  }

  & span:first-child {
    border-right: 1px solid ${(p) => p.theme.colors.background};
    padding-right: 1rem;
  }

  & span:last-child {
    border-left: 1px solid ${(p) => p.theme.colors.background};
    padding-left: 1rem;
  }
}
`;

interface ButtonPs {
  theme: DefaultTheme,
  active: boolean,
  percentage: number,
}

export const Button = styled.button`
width: 100%;
padding: 1.3rem 0;

cursor: pointer;
position: relative;

display: flex;
align-items: center;
justify-content: center;

border: 0;
border-radius: 5px;

background: ${(p: ButtonPs) => (p.active ? p.theme.colors.activeButton : p.theme.colors.inactiveButton)}; 
color: ${(p: ButtonPs) => (p.active ? p.theme.colors.text : 'var(--white)')};
font-size: 1.2rem;
font-weight: 600;
outline: none;

transition: all 0.2s;

&:not(:disabled):hover {
  background: ${(p: ButtonPs) => (p.active ? p.theme.colors.activeButtonHover : p.theme.colors.inactiveButtonHover)}; 
  color: var(--white);
}

&:disabled {
  background: ${(p) => p.theme.colors.foreground};
  color: ${(p: ButtonPs) => (p.theme.colors.text)};
  cursor: not-allowed;

  & svg {
    color: ${(p) => p.theme.colors.positive};
  } 
}

& svg {
  margin-left: 0.5rem;
}

&:after {
  display: ${(p: ButtonPs) => (p.active ? 'block' : 'none')}; 
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #DCDDE0;
}

&:after {
    content: '';
    background: ${(p) => p.theme.colors.positive};
    width:${(p: ButtonPs) => (`${p.percentage}%`)}; 
    transition: 0.2s all ease-out;
    height: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
  }

`;
