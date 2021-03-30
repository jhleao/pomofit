import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-flow: column nowrap;
justify-content: flex-start;
align-items: center;

& > * {margin-bottom: 1rem};
& > *:last-child {margin-bottom: 0};
`;

interface InputPs {
  focused: boolean
}

export const Input = styled.input`
width: 100%;
border: none;
border-bottom: solid 2px lightgray;
border-color: ${(p: InputPs) => p.focused ? 'purple' : 'lightgray'};
`;

export const Label = styled.label`
width: 100%;
color: #222;
`;