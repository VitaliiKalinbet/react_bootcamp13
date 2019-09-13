import { combineReducers } from 'redux';
import { Type } from './timerActions';

const timerReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.INCREMENT:
      return prevState + action.payload;

    case Type.DECREMENT:
      return prevState - action.payload;

    default:
      return prevState;
  }
};

const stepReducer = (prevState = 5, action) => {
  switch (action.type) {
    case Type.CHANGE_STEP:
      return action.payload;

    default:
      return prevState;
  }
};

export default combineReducers({
  value: timerReducer,
  step: stepReducer,
});
