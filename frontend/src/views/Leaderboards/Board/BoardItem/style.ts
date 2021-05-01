import styled from 'styled-components';

export const Container = styled.tr`
display: grid;
grid-template-columns: 1fr 0.3em 5fr 2fr 2fr;
grid-template-rows: 1fr;

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
background: #fff;
border-radius: 5px 0 0 5px;
font-weight: 600;
font-size: 1.2em;
padding: 0 1.4em;
`;

export const UserData = styled.div`
display: inline-grid;
grid-template-columns: 1fr 5fr;
grid-template-rows: 1fr 1fr;
grid-gap: 0.2em;
background: #fff;
padding: 0.7em 1em;
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
background: #fff;
display: inline-flex;
flex-flow: row nowrap;
justify-content: flex-start;

align-items: center;

& > span {
  color: var(--primary);
  margin-right: 0.4em;
}
`;

export const Experience = styled.div`
padding: 0.7em 1em;
background: #fff;
display: inline-flex;
flex-flow: row nowrap;
justify-content: flex-start;
align-items: center;

& > span {
  color: var(--primary);
  margin-right: 0.4em;
}
`;