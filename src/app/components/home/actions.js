import { INCREMENT_COUNT, DECREMENT_COUNT } from './reducer';

export const incrementCounter = () => ({
  type: INCREMENT_COUNT,
});
export const decrementCounter = () => ({
  type: DECREMENT_COUNT,
});
