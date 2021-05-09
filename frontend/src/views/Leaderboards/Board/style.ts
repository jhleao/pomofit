import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;
width: 100%;
`;

export const BoardHeader = styled.div`
display: grid;
grid-template-columns: 1fr 0.3em 5fr 2fr 2fr;
grid-template-rows: 1fr;
width: 100%;
justify-items: start;
margin-bottom: 1rem;

color: var(--lightText);
font-size: 0.7em;
font-weight: 600; 
text-transform: uppercase;
opacity: 0.9;

& > *{padding-left: 0.5rem;};
& > *:nth-child(1) {grid-column: 1;};
& > *:nth-child(2) {grid-column: 3;};
& > *:nth-child(3) {grid-column: 4;};
& > *:nth-child(4) {grid-column: 5;};

`;
