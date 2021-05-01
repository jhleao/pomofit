import styled, { DefaultTheme } from 'styled-components';

interface ContainerPs {
  selected: Boolean;
  theme: DefaultTheme;
}

export const Container = styled.a`
color: ${({selected}: ContainerPs) => selected ? `var(--primary)` : `rgba(0, 0, 0, 0.5)`};
border-left: ${({selected}: ContainerPs) => selected ? `solid 3px var(--primary)` : `solid 3px transparent`};
font-size: 2rem;
cursor: pointer;
padding: 0.7rem 1.8rem;
width: 100%;

display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

transition: all 0.1s ease-out;

&:hover {
  background: #f6f6f6f6;
}
`;
