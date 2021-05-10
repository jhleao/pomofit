import styled from 'styled-components';

export const PageContainer = styled.div`
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

height: 100vh;
width: 100vw;
padding: 1rem 3rem;
background: var(--primary);

@media screen and (max-width: 750px){
  padding: 0;
}
`;

export const Container = styled.div`
width: 100%;
height: 80vh;
max-width: 500px;
background: white;
box-shadow: 0px 0px 200px rgba(0, 0, 0, 0.4);
padding: 2rem 5rem;
color: #b91d00;
display: flex;
flex-flow: row wrap;
border-radius: 5px;

@media screen and (max-width: 750px){
box-shadow: none;
background: none;

height: 60vh;
padding: 2rem 3rem;
color: white;

}
`;

export const Section = styled.div`
flex: 1;

display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;

& > * {margin-bottom: 1rem};
& > *:last-child {margin-bottom: 0};
`;

export const Text = styled.p`
font-weight: 600;
`;

export const Img = styled.img`
width: 80%;
&:first-of-type{display: block;};
&:last-of-type{display: none;};

@media screen and (max-width: 750px){
  &:first-of-type{display: none;};
  &:last-of-type{display: block;};
}
`;
