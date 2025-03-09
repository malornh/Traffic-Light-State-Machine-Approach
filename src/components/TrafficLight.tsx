import React, { useState, useEffect } from 'react';
import './TrafficLight.css';

type TrafficLightColor = 'red' | 'yellow' | 'green';

interface Props
{
    color: TrafficLightColor;
}


const TrafficLight: React.FC<Props> = ({color}) => {

  return (
    <div className="traffic-light-container">
      <div
        className={`light ${color === 'red' ? 'red' : 'off'}`}
      />
      <div
        className={`light ${color === 'yellow' ? 'yellow' : 'off'}`}
      />
      <div
        className={`light ${color === 'green' ? 'green' : 'off'}`}
      />
    </div>
  );
};

export default TrafficLight;
