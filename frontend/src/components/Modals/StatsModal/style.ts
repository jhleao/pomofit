import { IoStatsChart } from 'react-icons/io5';
import styled, { keyframes } from 'styled-components';

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
position: fixed;
top: 0;
left: 0;

background: ${(p) => p.theme.colors.overlay};
filter: blur(20px);
`;

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

position: fixed;
top: 50%;
left: 50%;
background: ${(p) => p.theme.colors.foreground};

opacity: 0;
transform: translate(-50%, -80%);
animation: ${anim} 0.2s ease-out 0.1s 1 forwards running;
transition: all 0.2s;

padding: 2.2rem 3rem;
border-radius: 5px;
box-shadow: 0 0 60px rgba(0, 0, 0, 0.07);

& > * {margin-bottom: 1rem};
& > *:last-child {margin-bottom: 0};

@media screen and (max-width: 1000px){
  width: 90vw;
}
`;

export const CloseIcon = styled.img`
position: absolute;
top: 0.3rem;
right: 0.3rem;
width: 3rem;
height: 3rem;
align-self: flex-end;
cursor: pointer;
`;

export const Title = styled.div`
font-size: 1.8rem;
font-weight: 600;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

& > * {margin-right: 1rem};
& > *:last-child {margin-right: 0};
`;

export const StatsBox = styled.div`
padding: 1rem;
width: 50%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

& > p {
  
}

& > span {
  font-size: 2rem;
  font-weight: 700;
}
`;

export const StatsContainer = styled.div`
display: flex;
width: 30vw;
flex-flow: row wrap;
`;

export const StatsIcon = styled(IoStatsChart)`
font-size: 1.5rem;
margin-right: 0.6rem;
cursor: pointer;
`;

export const ThemeToggleContainer = styled.div`
font-size: 1rem;
font-weight: 600;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

& > * {margin-right: 1rem};
& > *:last-child {margin-right: 0};
`;
