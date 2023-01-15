import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './timer.components.scss';
import { addPadTime } from '../../utils/timer/addPadTime.utils';
import { ControlPanel } from '../controlPanel/controlpanel.components';
import { stageSwitch } from '../../utils/timer/stageSwitch.utils';
import { TimeSettings } from '../../types';

interface Props {
  timeSettings: TimeSettings;
  stage: number | undefined;
  setStage: Dispatch<SetStateAction<number | undefined>>;
}

export const Timer = ({
  timeSettings,
  stage,
  setStage,
}: Props): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  //init timeLeft
  useEffect(() => {
    stageSwitch(stage, setTimeLeft, timeSettings);
  }, [stage]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft - minutes * 60;

  //timer
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isCounting) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
      }, 1000);

      if (timeLeft === 0) {
        setIsCounting(false);
        if (stage === 8) {
          setStage(1);
        } else {
          setStage((prev) => (prev !== undefined ? prev + 1 : undefined));
        }
      }
    }

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
        stage={stage}
        setStage={setStage}
      />
    </>
  );
};
