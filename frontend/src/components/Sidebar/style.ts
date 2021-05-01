import styled from 'styled-components';

export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
/* position: fixed;
top: 0;
left: 0; */
position: relative;
background: #fff;
background: linear-gradient(rgba(255, 255, 255), rgba(255,255,255 0));
box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.001);

& > * {margin-bottom: 1rem;};
& > *::last-child {margin-bottom: 0;};
`;

export const Logo = styled.img`
position: absolute;
top: 1rem;
margin: 0 auto;
height: 3rem;
`;