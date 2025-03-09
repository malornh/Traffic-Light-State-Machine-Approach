import { TrafficLightStates } from "./states/TrafficLightStates";
import "./TrafficLight.css";

interface TrafficLightProps {
  state: any;
}

const TrafficLight: React.FC<TrafficLightProps> = ({ state }) => {

  return (
    <div className="traffic-light-container">
      <div
        className={`light ${
          state.matches(TrafficLightStates.RED) ||
          state.matches(TrafficLightStates.RED_YELLOW) ? 'red' : 'off'}`}
       />
      <div
        className={`light 
          ${state.matches(TrafficLightStates.RED_YELLOW) ? 'yellow' : ''} 
          ${state.matches(TrafficLightStates.BROKEN) ? 'broken' : ''} 
          ${!state.matches(TrafficLightStates.RED_YELLOW) && !state.matches(TrafficLightStates.BROKEN) ? 'off' : ''}`
        }
      />
      <div
          className={`light ${state.matches(TrafficLightStates.GREEN) ? 'green' : 'off'}`}
      />
    </div>
  );
};

export default TrafficLight;
