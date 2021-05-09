import { IoMdClose } from 'react-icons/io';
import styled, { DefaultTheme } from 'styled-components';

interface ContainerPs {
  theme: DefaultTheme;
  mobileOpen: boolean;
}

export const Container = styled.div`
height: 100vh;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
position: relative;
background: ${(p) => p.theme.colors.foreground};
background: linear-gradient(${(p) => p.theme.colors.foreground}, ${(p) => p.theme.colors.background});
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.001);

& > * {margin-bottom: 1rem;};
& > *::last-child {margin-bottom: 0;};

@media screen and (max-width: 1000px){
  transition: all 0.2s ease-out;
  width: 100vw;

  position: absolute;
  top: 0;
  left: ${(p: ContainerPs) => (p.mobileOpen ? '0' : '-100%')};
}
`;

export const Logo = styled.img`
position: absolute;
top: 1rem;
margin: 0 auto;
height: 3rem;

@media screen and (max-width: 1000px){
  margin: 0;
  top: 2rem;
  left: 2rem;
}
`;

export const MobileClose = styled(IoMdClose)`
display: none;

@media screen and (max-width: 1000px){
  cursor: pointer;
  display: block;
  position: absolute;
  top: 2.5rem;
  right: 3rem;
  color: var(--primary);
  font-size: 2.5rem;
}
`;

export const MobileTopbar = styled.div`
display: none;

@media screen and (max-width: 1000px){
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: var(--primary);
  width: 100%;
  height: 100%;
  background: ${(p) => p.theme.colors.background};
  /* background: linear-gradient(${(p) => p.theme.colors.foreground}, ${(p) => p.theme.colors.background}); */
  padding: 0 2rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);

}
`;
