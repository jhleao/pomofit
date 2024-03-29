import styled, { DefaultTheme, keyframes } from 'styled-components';

const anim = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -40%)
  }
to {
  opacity: 1;
  transform: translate(-50%, -50%)
  }
`;

export const Overlay = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;

background: rgba(255, 255, 255, 0.5);
filter: blur(20px);
`;

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

position: absolute;
top: 50%;
left: 50%;
background: #fff;

opacity: 0;
transform: translate(-50%, -80%);
animation: ${anim} 0.2s ease-out 0.1s 1 forwards running;
transition: all 0.2s;

border-radius: 5px;
overflow: hidden;
box-shadow: 0 0 60px rgba(0, 0, 0, 0.07);
`;

interface ButtonPs {
  alternative?: boolean;
  theme: DefaultTheme;
}

export const Button = styled.button`
padding: 1rem 4rem;
width: 100%;
border: none;
cursor: pointer;
outline: none;
font-weight: 600;
color: ${(p: ButtonPs) => p.alternative ? p.theme.colors.text: p.theme.colors.text };
background: ${(p: ButtonPs) => p.alternative ? 'var(--darkSecondary)' : p.theme.colors.foreground };
transition: all 0.2s ease-out;

&:hover {
  filter: brightness(0.95);
}
`;


export const Title = styled.div`
font-size: 1.2rem;
font-weight: 600;
padding: 1.3rem 3rem;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

& > * {margin-right: 1rem};
& > *:last-child {margin-right: 0};
`;

export const ButtonsContainer = styled.div`
display: flex;
width: 100%;
`;