import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: flex-start;
`;

export const Content = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: flex-start;
min-height: 100vh;
margin-left: 6rem;
position: relative;
flex: 1
`;

export const GradientOverlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
/* transform: translate(-50%, -50%); */

background: transparent;
background: linear-gradient(180deg, rgba(242,243,245,0) 90%, rgba(242,243,245,0.8) 100%);
z-index: 20;
`;

export const SidebarContainer = styled.div`
position: fixed;
width: 6rem;
height: 100vh;

background: red;
`;