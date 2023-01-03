import React from 'react';
import './app.scss';
import './themesConfig.scss';
import { Timer } from './components/timer/timer.components';

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Timer />
      </div>
    </div>
  );
}

export default App;
