import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #d7d8da;
padding-bottom: 0.8rem;
font-weight: 500;
cursor: default;

& span:first-child {
  font-size: 1.1rem;
}

& span:last-child {
  font-size: 1.25rem;
}
`;