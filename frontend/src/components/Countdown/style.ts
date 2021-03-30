import styled, { DefaultTheme } from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: row nowrap;
align-items: center;
font-weight: 600;
font-family: Rajdhani, sans-serif;
color: ${p => p.theme.colors.title};
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
  background: var(--white);
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
    border-right: 1px solid #f0f1f3;
    padding-right: 1rem;
  }

  & span:last-child {
    border-left: 1px solid #f0f1f3;
    padding-left: 1rem;
  }
}
`;

interface ButtonPs {
  theme: DefaultTheme,
  active: boolean,
}

export const Button = styled.button`
width: 100%;
padding: 1.3rem 0;

cursor: pointer;

display: flex;
align-items: center;
justify-content: center;

border: 0;
border-radius: 5px;

background: ${(p: ButtonPs) => p.active ? 'var(--white)' : 'var(--blue)'}; 
color: ${(p: ButtonPs) => p.active ? p.theme.colors.text : 'var(--white)'};
font-size: 1.2rem;
font-weight: 600;
outline: none;

transition: all 0.2s;

&:not(:disabled):hover {
  background: ${(p: ButtonPs) => p.active ? 'var(--red)' : 'var(--darkBlue)'}; 
  color: var(--white);
}

&:disabled {
  background: var(--green);
  color: var(--white);
  cursor: not-allowed;
}

& svg {
  margin-left: 0.5rem;
}
`;