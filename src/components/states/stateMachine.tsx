import { createMachine } from "xstate";
import { TrafficLightStates } from "./trafficLightEnum";

export const trafficLightMachine = createMachine({
  id: "trafficLight",
  initial: TrafficLightStates.RED,
  states: {
    [TrafficLightStates.RED]: {
      on: { 
        SWITCH: TrafficLightStates.RED_YELLOW,
        BROKEN: TrafficLightStates.BROKEN,
        RESTART: TrafficLightStates.RED
       },
    },
    [TrafficLightStates.RED_YELLOW]: {
      on: { 
        SWITCH: TrafficLightStates.GREEN,
        BROKEN: TrafficLightStates.BROKEN,
        RESTART: TrafficLightStates.RED
       },
     },
    [TrafficLightStates.GREEN]: {
      on: { 
        SWITCH: TrafficLightStates.RED,
        BROKEN: TrafficLightStates.BROKEN,
        RESTART: TrafficLightStates.RED
       },
    },
    [TrafficLightStates.BROKEN]: {
      on: { RESTART: TrafficLightStates.RED },
    },
  }
});
