interface ApiError {
  type?: string;
  title?: string;
  detail?: string;
  status: string;
}

import { ToggleAlertModal } from '../../contexts/ModalContext';

const createErrorHandler = ({toggleAlertModal}: {toggleAlertModal: ToggleAlertModal}) => {
  return (e: ApiError) => handleApiError(e, toggleAlertModal);
}

const handleApiError = (e: ApiError, toggleAlertModal: ToggleAlertModal) => {
  const error = e.title;
  switch(error){
    default:
      toggleAlertModal({msg: 'Algo deu errado'});
      break;
  }
}

export default createErrorHandler