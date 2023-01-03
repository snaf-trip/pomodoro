import React, { Dispatch } from 'react';

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
    <>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>reset</button>
    </>
  );
};