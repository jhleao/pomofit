import styled, { DefaultTheme } from 'styled-components';

interface FilledPs {
  percentage: number; 
  theme: DefaultTheme // caso quisesse puxar tema nesse caso...
}

export const Filled = styled.div`
height: 4px;
width: ${(p: FilledPs) => `${p.percentage}%`};
background: ${(p: FilledPs) => `${p.theme.colors.textHighlight}`}; // fazer assim
background: var(--green);
transition: all 0.2s ease-out;
`;

interface CurrentPs { percentage: number; }

export const Current = styled.span`
position: absolute;
left: ${(p: CurrentPs) => `${p.percentage}%`};
transform: translate(-50%, 0);
margin-top: 0.3rem;
white-space: nowrap;
`;

export const Div = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
width: 100%;
color: ${props => props.theme.colors.text};
`;

export const Bar = styled.div`
flex: 1;
height: 4px;
border-radius: 4px;
background: ${props => props.theme.colors.line};
position: relative;
margin: 0 1rem;
`;