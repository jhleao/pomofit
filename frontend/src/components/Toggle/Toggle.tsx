import React from 'react';
import { ToggleLabel } from './style';

interface Props {
  set: (v: boolean) => void;
  value: boolean;
}

const Toggle: React.FC<Props> = ({set, value}) => {

  return (
    <ToggleLabel>
      <input 
        type="checkbox" 
        onChange={e => set(!value)} 
        checked={value}/>
      <i></i>
    </ToggleLabel>
  );
}

export default Toggle;
