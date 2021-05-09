import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
padding: 3rem 3rem;
background: ${(p) => p.theme.colors.foreground};
background: linear-gradient( ${(p) => p.theme.colors.foreground} 30%, ${(p) => p.theme.colors.background} 100%);
box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
border-radius: 4px;
overflow: hidden;
position: relative;

display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 1000px){
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}
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
padding-bottom: 1rem;

  & > h3 {
    font-size: 1.2rem;
    color: ${(p) => p.theme.colors.title};
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
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    & button{
      border: none;
      padding: 1.3rem 3rem;
      color: var(--white);
      cursor: pointer;
      font-weight: 600;
      font-size: 1rem;
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
      background: ${(p) => p.theme.colors.positive};
    }
  }
`;
