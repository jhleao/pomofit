import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
padding: 3rem 3rem;
background: var(--white);
box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

display: flex;
justify-content: center;
align-items: center;
`;

export const NotActive = styled.div`
font-size: 1.5rem;
font-weight: 600;
text-align: center;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  & > div {
  margin-top: 2rem;
  width: 14rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  font-size: 1rem;
  font-weight: 400;

    & > img {
      height: 3rem;
      margin-right: 1rem;
    }

  }
`;

export const Active = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


  & > h3 {
    font-size: 1.2rem;
    color: var(--blue);
    margin-bottom: 1.5rem;
  }

  & > div:first-of-type {
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    padding: 2rem 0;
    border-top: 1px solid lightgray;

    & > h4 {
      font-size: 1.5rem;
    }

    & > * {
      margin-bottom: 1rem;
    }
  }

  & > div:last-child{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.5rem;
    margin: 0;

    & button{
      border: none;
      padding: 1rem 3rem;
      color: var(--white);
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      transition: all 0.2s;
      outline: none;

      &:hover {
        filter: brightness(0.9);
      }
    }

    & button:first-child{
      background: var(--red);
    }

    & button:last-child{
      background: var(--green);
    }
  }
`;