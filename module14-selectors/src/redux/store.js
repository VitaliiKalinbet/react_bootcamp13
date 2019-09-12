import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import timerReducer from './Timer/timerReducer';
import postsReducer from './Posts/postsReducers';

// const rootReducer = combineReducers({
//   value: timerReducer,
//   step: stepReducer,
// });

const rootReducer = combineReducers({
  timer: timerReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, {}, devToolsEnhancer());

export default store;
