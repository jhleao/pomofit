import styled, { DefaultTheme } from 'styled-components';

interface ContainerPs {
  selected: Boolean;
  theme: DefaultTheme;
}

export const Container = styled.a`
color: ${(p: ContainerPs) => (p.selected ? 'var(--primary)' : p.theme.colors.text)};
border-left: ${({ selected }: ContainerPs) => (selected ? 'solid 3px var(--primary)' : 'solid 3px transparent')};
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
  background: ${(p) => p.theme.colors.background};
}
`;

export const MobileText = styled.p`
display: none;

@media screen and (max-width: 1000px){
  display: block;
  font-size: 1.5rem;
  margin-left: 0.5rem;
}
`;
