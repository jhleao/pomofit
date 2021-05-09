import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: flex-start;

& > h1 {
  font-weight: 600;
  margin: 2rem 0;
}

@media screen and (max-width: 1000px){
  width: 90%;
  margin: 0 auto;
}
`;
