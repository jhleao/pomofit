import styled from 'styled-components';
import { IoStatsChart } from 'react-icons/io5';
import { BiPowerOff } from 'react-icons/bi';

export const Container = styled.div`
height: 4rem;
display: flex;
align-items: center; 

& > img {
  width: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
}

& > div {
  flex: 1;
  display: grid;
  grid-template-rows: 1fr 0.7fr;

  & > strong {
    font-weight: 600;
    font-size: 1.1rem;
    color: ${p => p.theme.colors.title};
  }

  & > p {
    font-weight: 400;
    font-size: 0.8rem;
    color: ${p => p.theme.colors.text};
    display: flex;
    align-items: center;

    & > svg {
      font-size: 1.4rem;
      color: var(--green);
    }
  }
}
`;

export const StatsIcon = styled(IoStatsChart)`
font-size: 1.5rem;
margin-right: 0.6rem;
cursor: pointer;
`;

export const LogoutButton = styled(BiPowerOff)`
font-size: 1.8rem;
margin-right: 0.6rem;
cursor: pointer;
`;