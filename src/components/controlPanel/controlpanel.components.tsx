import React, { Dispatch } from 'react';
import './controlpanel.components.scss';
import {
  PauseIcon,
  StartIcon,
  SkipIcon,
} from '../../img/controlPanel/export.conrolPanel.img';

interface Props {
  timeLeft: number;
  setTimeLeft: Dispatch<React.SetStateAction<number>>;
  isCounting: boolean;
  setIsCounting: Dispatch<React.SetStateAction<boolean>>;
}

export const ControlPanel = ({
  timeLeft,
  setTimeLeft,
  isCounting,
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
      <a
        className={`controlPanel__button ${
          isCounting && 'controlPanel__button_disable'
        }`}
        onClick={startTimer}
      >
        <StartIcon />
      </a>
      <a
        className={`controlPanel__button ${
          !isCounting && 'controlPanel__button_disable'
        }`}
        onClick={pauseTimer}
      >
        <PauseIcon />
      </a>
      <a className="controlPanel__button" onClick={resetTimer}>
        <SkipIcon />
      </a>
    </div>
  );
};
