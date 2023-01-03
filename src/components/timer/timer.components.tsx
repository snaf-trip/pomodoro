import React, { useEffect, useState } from 'react';
import { addPadTime } from '../../utils/timer/addPadTime.utils';

export const Timer = (): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isCounting, setIsCounting] = useState(false);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) setIsCounting(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

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
      <div>Timers</div>
      <span>
        {addPadTime(minutes)}:{addPadTime(seconds)}
      </span>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={resetTimer}>reset</button>
    </>
  );
};
