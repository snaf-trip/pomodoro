import React, { useEffect, useState } from 'react';
import './app.scss';
import './themesConfig.scss';
import { Timer } from './components/timer/timer.components';

function App() {
  const [timeSettings, setTimeSetting] = useState({
    work: 25,
    shortBreake: 5,
    longBreake: 15,
  });

  const [stage, setStage] = useState<number | undefined>();

  useEffect(() => {
    const localStage = localStorage.getItem('stage');

    if (stage === undefined) {
      if (localStage !== null) {
        setStage(Number(localStage));
      } else {
        localStorage.setItem('stage', JSON.stringify(1));
        setStage(1);
      }
    } else {
      localStorage.setItem('stage', JSON.stringify(stage));
    }
  }, [stage]);

  return (
    <div className="app">
      <div className="app__container">
        <Timer timeSettings={timeSettings} stage={stage} setStage={setStage} />
      </div>
    </div>
  );
}

export default App;
