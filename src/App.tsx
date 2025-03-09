import React from 'react';
import TrafficLight from './components/TrafficLight';
import './App.css';
import { TrafficLightMachine } from './components/states/TrafficLightMachine';
import { useMachine } from '@xstate/react';

const App: React.FC = () => {
  const [state, send] = useMachine(TrafficLightMachine);

  return (
    <div className="app-container">
      <TrafficLight state={state}/>
      
      <div className="buttons-container">
        <button className="button" onClick={() => send({type: 'SWITCH'})}>Switch</button>
        <button className="button" onClick={() => send({type: 'BROKEN'})}>Broken</button>
        <button className="button" onClick={() => send({type: 'RESET'})}>Reset</button>
      </div>
    </div>
  );
};

export default App;
