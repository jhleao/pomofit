import React, { useContext } from 'react'
import { Container, StatsIcon, LogoutButton } from './style';
import { GoArrowUp } from 'react-icons/go';
import { GlobalContext } from '../../contexts/GlobalContext';
import ModalContext from '../../contexts/ModalContext';
import ApiContext from '../../contexts/ApiContext';

const Profile = () => {

  const { level, profile } = useContext(GlobalContext);
  const { toggleStatsModal, toggleConfirmationModal } = useContext(ModalContext);
  const { auth: { logout } } = useContext(ApiContext);

  const toggleLogoutModal = () => 
    toggleConfirmationModal({msg: 'Deseja fazer o logout?', cb: logout});

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
