import { createContext, useState } from 'react';

const ModalContext = createContext({} as ModalCtxData);
export default ModalContext;

interface alertModalPs {
  msg: string;
}

interface confirmationModalPs {
  msg: string;
  cb: (() => void) | (() => Promise<void>);
}

export type ToggleAlertModal = (data?: alertModalPs) => void;
export type ToggleConfirmationModal = (data?: confirmationModalPs) => void;

interface ModalCtxData {
  toggleLevelModal: () => void;
  toggleStatsModal: () => void;
  levelModalIsOpen: Boolean;
  statsModalIsOpen: Boolean;
  setLevelModalIsOpen: (v: Boolean) => void;
  toggleAlertModal: ToggleAlertModal;
  toggleConfirmationModal: ToggleConfirmationModal;
  alertModalIsOpen: Boolean;
  confirmationModalIsOpen: Boolean;
  confirmationModalData: confirmationModalPs;
  alertModalMsg: string;
}

export const ModalProvider = ({children}) => {

  const [alertModalIsOpen, setAlertModalIsOpen] = useState(false as Boolean);
  const [alertModalMsg, setAlertModalMsg] = useState('');
  const toggleAlertModal = ({msg}: alertModalPs) => {
    if(msg) setAlertModalMsg(msg);
    setAlertModalIsOpen(!alertModalIsOpen)
  };

  const [confirmationModalIsOpen, setConfirmationModalIsOpen] = useState(false as Boolean);
  const [confirmationModalData, setConfirmationModalData] = useState({msg: '', cb: () => {}} as confirmationModalPs);
  const toggleConfirmationModal = ({msg, cb}: confirmationModalPs) => {
    if(msg && cb) setConfirmationModalData({msg, cb});
    setConfirmationModalIsOpen(!confirmationModalIsOpen);
  };

  const [levelModalIsOpen, setLevelModalIsOpen] = useState(false as Boolean);
  const toggleLevelModal = () => setLevelModalIsOpen(!levelModalIsOpen);

  const [statsModalIsOpen, setStatsModalIsOpen] = useState(false as Boolean);
  const toggleStatsModal = () => setStatsModalIsOpen(!statsModalIsOpen);

  const data = {
    toggleAlertModal,
    toggleConfirmationModal,
    alertModalIsOpen,
    confirmationModalIsOpen,
    confirmationModalData,
    alertModalMsg,
    toggleLevelModal,
    setLevelModalIsOpen,
    toggleStatsModal,
    levelModalIsOpen,
    statsModalIsOpen,
  }

  return (
    <ModalContext.Provider value={data}>
      {children}
    </ModalContext.Provider>
  )
}
