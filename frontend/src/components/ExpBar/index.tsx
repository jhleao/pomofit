import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext';
import { Filled, Div, Bar, Current } from './style';

const ExpBar: React.FC = () => {

  const { 
    experienceToPreviousLevel: prev,
    experienceToNextLevel: next, 
    currentExperience: cur, } = useContext(GlobalContext);

  const percentage = (cur / next) * 100;

  return (
  <Div>
    <span>{prev} xp</span>
      <Bar>
        <Filled percentage={percentage} />
        <Current percentage={percentage} >{cur} xp</Current>
      </Bar>
    <span>{next} xp</span>
  </Div>
  )
}

export default ExpBar


