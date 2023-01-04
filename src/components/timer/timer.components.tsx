import React, { useEffect, useState } from 'react';
import './timer.components.scss';
import { addPadTime } from '../../utils/timer/addPadTime.utils';
import { ControlPanel } from '../controlPanel/controlpanel.components';

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

  return (
    <>
      <div className="timeContainer">
        <span className="timeContainer__time">{addPadTime(minutes)}</span>
        <span className="timeContainer__time">{addPadTime(seconds)}</span>
      </div>

      <ControlPanel
        timeLeft={timeLeft}
        setTimeLeft={setTimeLeft}
        isCounting={isCounting}
        setIsCounting={setIsCounting}
      />
    </>
  );
};
