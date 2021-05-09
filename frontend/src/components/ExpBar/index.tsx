import { useContext, FC } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext';
import { Filled, Div, Bar, Current } from './style';

const ExpBar: FC = () => {
  const {
    experienceToPreviousLevel: prev,
    experienceToNextLevel: next,
    currentExperience: cur,
  } = useContext(GlobalContext);

  const percentage = ((cur - prev) / (next - prev)) * 100;

  return (
    <Div>
      <span>{0} xp</span>
      <Bar>
        <Filled percentage={percentage} />
        <Current percentage={percentage} >{cur - prev}xp</Current>
      </Bar>
      <span>{next - prev} xp</span>
    </Div>
  );
};

export default ExpBar;
