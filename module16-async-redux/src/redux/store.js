import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import postsReducer from "./Posts/postsReducers";
// import stateValidator from "./middleware/stateValidator";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  posts: postsReducer
});

const enhancer = applyMiddleware(ReduxThunk);

const store = createStore(rootReducer, {}, composeWithDevTools(enhancer));

export default store;
