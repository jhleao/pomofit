import styled from 'styled-components';
 
export const Container = styled.div`
width: 100%;
padding: 0 3.3rem;
display: grid;
grid-template-columns: 1fr 1fr;
align-content: center;  
justify-items: center;
align-items: stretch;
grid-gap: 5.5rem;

@media screen and (max-width: 1000px){
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
  padding: 0;
  padding-bottom: 5rem;
}
`;

export const PageContainer = styled.div`
display: grid;
grid-template-rows: 1fr 10fr;
justify-items: center;

height: 100vh;
width: 100vw;
padding: 1rem 3rem;
max-width: 1100px;

@media screen and (max-width: 1000px){
  padding: 0;
}
`;

export const Section = styled.div`
& > *:last-child {margin-bottom: 0;}
& > * {margin-bottom: 4rem;}
`;
