import { Type } from './timerActions';

export const timerReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return prevState + action.payload;

    case Type.DECREMENT:
      return prevState - action.payload;

    default:
      return prevState;
  }
};

export const stepReducer = (prevState = { value: 5, label: 5 }, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;

    default:
      return prevState;
  }
};
