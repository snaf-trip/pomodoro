import React, { Dispatch } from 'react';
import './controlpanel.components.scss';

interface Props {
  timeLeft: number;
  setTimeLeft: Dispatch<React.SetStateAction<number>>;
  setIsCounting: Dispatch<React.SetStateAction<boolean>>;
}

export const ControlPanel = ({
  timeLeft,
  setTimeLeft,
  setIsCounting,
}: Props): JSX.Element => {
  const startTimer = () => {
    if (timeLeft === 0) setTimeLeft(25);
    setIsCounting(true);
  };

  const pauseTimer = () => {
    setIsCounting(false);
  };

  const resetTimer = () => {
    setIsCounting(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="controlPanel">
      <a className="controlPanel__button" onClick={startTimer}>
        start
      </a>
      <a className="controlPanel__button" onClick={pauseTimer}>
        pause
      </a>
      <a className="controlPanel__button" onClick={resetTimer}>
        reset
      </a>
    </div>
  );
};
