import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import timerReducer from './Timer/timerReducer';
import postsReducer from './Posts/postsReducers';
import logger from './middleware/logger';
import throttle from './middleware/throttle';
import stateValidator from './middleware/stateValidator';

// const rootReducer = combineReducers({
//   value: timerReducer,
//   step: stepReducer,
// });

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const enhancer = applyMiddleware(throttle, logger, stateValidator);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

// createStore(reducer, initialStore, enchancer)
// createStore(reducer, enchancer)

export default store;
