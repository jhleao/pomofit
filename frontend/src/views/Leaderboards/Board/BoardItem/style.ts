import styled from 'styled-components';

export const Container = styled.div`
display: grid;
grid-template-columns: 1fr 0.3em 5fr 2fr 2fr;
grid-template-rows: 1fr;
width: 100%;

margin-bottom: 0.3rem;
font-size: 1rem;

& > *:nth-child(1) {grid-column: 1;};
& > *:nth-child(2) {grid-column: 3;};
& > *:nth-child(3) {grid-column: 4;};
& > *:nth-child(4) {grid-column: 5;};

& > td > * {
  height: 100%;
};

&:last-child{
  margin-bottom: 0;
}
`;

export const Position = styled.div`
display: inline-flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;
background: ${(p) => p.theme.colors.foreground};
border-radius: 5px 0 0 5px;
font-weight: 600;
font-size: 1.2em;
padding: 0 1.4em;
`;

export const UserData = styled.div`
display: flex;
align-items: center;
flex-flow: row nowrap;
background: ${(p) => p.theme.colors.foreground};
padding: 0.7em 1em;

& > div {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
}
`;

export const Img = styled.img`
height: 3.4em;
border-radius: 50em;
margin-right: 0.5em;

grid-row: 1 / 3;
grid-column: 1;
`;

export const Name = styled.p`
grid-row: 1;
grid-column: 2;
align-self: end;

font-weight: 600;
`;

export const Level = styled.div`
align-self: start;
grid-row: 2;
grid-column: 2;

font-size: 0.8em;

display: inline-flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;

& > img {
  height: 0.9em;
  margin-right: 0.2em;
}
`;

export const ChallengeCount = styled.div`
padding: 0.7em 1em;
background: ${(p) => p.theme.colors.foreground};;
display: inline-flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;


& > span:first-child {
  color: var(--primary);
  margin-right: 0.4em;
}

& > span:last-child {
  @media screen and (max-width: 1000px){
    display: none;
  }
}
`;

export const Experience = styled.div`
padding: 0.7em 1em;
background: ${(p) => p.theme.colors.foreground};
display: inline-flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;

& > span:first-child {
  color: var(--primary);
  margin-right: 0.4em;
}

& > span:last-child {
  @media screen and (max-width: 1000px){
    display: none;
  }
}
`;
