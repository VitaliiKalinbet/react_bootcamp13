import { combineReducers } from 'redux';
import { Type } from './postsActions';
import itemsFromJson from '../../posts.json';

const INITIAL_STATE_ITEMS_REDUCER = itemsFromJson;

const itemsReducer = (prevState = INITIAL_STATE_ITEMS_REDUCER, action) => {
  switch (action.type) {
    case Type.FETCH_ITEMS:
      return action.payload;

    case Type.FILTER_ITEMS:
      return prevState.filter(el => el.tag === action.someInfo);

    case Type.DELETE_ITEM:
      return prevState.filter(el => el.id !== action.data);

    default:
      return prevState;
  }
};

const selectedTagReducer = (prevState = '', { type, payload }) => {
  switch (type) {
    case Type.TAG_SELECTED:
      return payload;

    default:
      return prevState;
  }
};

export default combineReducers({
  items: itemsReducer,
  selectTag: selectedTagReducer,
});

// const INITIAL_STATE = {
//   items: [],
//   selectedTag: '',
// };

// const postsReducer = (prevState = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case Type.FETCH_ITEMS:
//       return { ...prevState, items: action.payload };

//     case Type.FILTER_ITEMS:
//       return {
//         ...prevState,
//         items: prevState.items.prevState.filter(
//           el => el.tag === action.someInfo,
//         ),
//       };

//     case Type.DELETE_ITEM:
//       return {
//         ...prevState,
//         items: prevState.items.prevState.filter(el => el.id !== action.data),
//       };

//     case Type.TAG_SELECTED:
//       return {
//         ...prevState,
//         selectedTag: action.payload,
//       };

//     default:
//       return prevState;
//   }
// };

// export default postsReducer;
