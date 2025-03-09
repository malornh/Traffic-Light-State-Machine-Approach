import React from 'react';
import TrafficLight from './components/TrafficLight';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <TrafficLight color='yellow' />
      
      <div className="buttons-container">
        <button className="button">Switch</button>
        <button className="button">Broken</button>
        <button className="button">Reset</button>
      </div>
    </div>
  );
};

export default App;
