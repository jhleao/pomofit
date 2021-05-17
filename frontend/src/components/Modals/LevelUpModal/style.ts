import styled, { keyframes } from 'styled-components';

const anim = keyframes`
from {
  opacity: 0;
  transform: translate(-50%, -90%)
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

position: absolute;
top: 50%;
left: 50%;
background: ${(p) => p.theme.colors.foreground};

opacity: 0;
transform: translate(-50%, -80%);
animation: ${anim} 0.6s ease-out 0.1s 1 forwards running;
transition: all 0.2s;

padding: 2.2rem 3rem;
border-radius: 5px;
box-shadow: 0 0 60px rgba(0, 0, 0, 0.07);
`;

export const Number = styled.div`
background: url('/icons/levelup.svg');
background-repeat: no-repeat;
background-size: contain;
background-position: center;

padding: 0 7rem;
font-size: 8rem;
font-weight: 600;
color: ${(p) => p.theme.colors.title}; 
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

export const Label = styled.div`
font-size: 1.8rem;
font-weight: 600;

display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

& > span {
  margin-top: 0.2rem;
  font-size: 1.1rem;
  font-weight: 400;
}
`;

export const WhatsAppShare = styled.button`
width: 100%;
margin-top: 1.5rem;
padding: 1rem 2rem;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

color: #222;
border: none;
font-size: 0.9rem;
font-weight: 600;

border-radius: 3px;
transition: all 0.2s;
cursor: pointer;
outline: none;

& > *:last-child{
  margin-left: 0.3rem;
  font-size: 1.2rem;
}

&:hover {
background: ${(p) => p.theme.colors.positive};
color: #fff;

  transform: scale(1.05);
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
`;
