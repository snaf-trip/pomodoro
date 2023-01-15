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
  stage: number | undefined;
  setStage: Dispatch<React.SetStateAction<number | undefined>>;
}

export const ControlPanel = ({
  timeLeft,
  setTimeLeft,
  isCounting,
  setIsCounting,
  setStage,
  stage,
}: Props): JSX.Element => {
  const startTimer = () => {
    setIsCounting(true);
  };

  const pauseTimer = () => {
    setIsCounting(false);
  };

  const resetTimer = () => {
    setIsCounting(false);
    if (stage === 8) {
      setStage(1);
    } else {
      setStage((prev) => (prev !== undefined ? prev + 1 : undefined));
    }
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
