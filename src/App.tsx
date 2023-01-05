import React, { useState } from 'react';
import './app.scss';
import './themesConfig.scss';
import { Timer } from './components/timer/timer.components';

function App() {
  const [timeSettings, setTimeSetting] = useState({
    work: 25,
    shortBreake: 5,
    longBreake: 15,
  });

  const [stage, setStage] = useState(1);

  return (
    <div className="app">
      <div className="app__container">
        <Timer timeSettings={timeSettings} stage={stage} setStage={setStage} />
      </div>
    </div>
  );
}

export default App;
