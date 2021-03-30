import React, { useContext } from 'react'
import { Container, StatsIcon, LogoutButton } from './style';
import { GoArrowUp } from 'react-icons/go';
import { GlobalContext } from '../../contexts/GlobalContext';

const Profile = () => {

  const { level, toggleStatsModal, toggleLogoutModal, profile } = useContext(GlobalContext);

  // const { name, img } = profile;


  return (
    <Container>
      <img src={profile?.img} alt={profile?.name} />
      <div>
        <strong>
          {profile?.name}
        </strong>
        <p>
          <GoArrowUp />
          Level {level}
        </p>
      </div>
      <StatsIcon onClick={toggleStatsModal} />
      <LogoutButton onClick={toggleLogoutModal} />
    </Container>
  )
}

export default Profile
