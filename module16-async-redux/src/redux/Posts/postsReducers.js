import { combineReducers } from "redux";
import { Type } from "./postsActions";

const itemsReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.FETCH_POSTS_SUCCESS:
      return action.payload.posts;

    case Type.FILTER_ITEMS:
      return prevState.filter(el => el.tag === action.someInfo);

    case Type.DELETE_POST_SUCCESS:
      return prevState.filter(el => el.id !== action.payload.id);

    case Type.ADD_POST_SUCCESS:
      return [...prevState, action.payload.post];

    case Type.UPDATE_POST_SUCCESS:
      return prevState.map(item =>
        item.id === action.payload.updatePost.id
          ? { ...action.payload.updatePost }
          : item
      );

    default:
      return prevState;
  }
};

const selectedTagReducer = (prevState = "", { type, payload }) => {
  switch (type) {
    case Type.TAG_SELECTED:
      return payload;

    default:
      return prevState;
  }
};

const isLoadingPosts = (prevState = false, action) => {
  switch (action.type) {
    case Type.FETCH_POSTS_START:
    case Type.DELETE_POST_START:
    case Type.ADD_POST_START:
    case Type.UPDATE_POST_START:
      return true;

    case Type.FETCH_POSTS_SUCCESS:
    case Type.FETCH_POSTS_ERROR:
    case Type.DELETE_POST_SUCCESS:
    case Type.DELETE_POST_ERROR:
    case Type.ADD_POST_SUCCESS:
    case Type.ADD_POST_ERROR:
    case Type.UPDATE_POST_SUCCESS:
    case Type.UPDATE_POST_ERROR:
      return false;

    default:
      return prevState;
  }
};

const errorPosts = (prevState = null, action) => {
  switch (action.type) {
    case Type.FETCH_POSTS_ERROR:
    case Type.DELETE_POST_ERROR:
    case Type.ADD_POST_ERROR:
    case Type.UPDATE_POST_ERROR:
      return action.payload.error;

    case Type.FETCH_POSTS_SUCCESS:
    case Type.FETCH_POSTS_START:
    case Type.DELETE_POST_SUCCESS:
    case Type.DELETE_POST_START:
    case Type.ADD_POST_SUCCESS:
    case Type.ADD_POST_START:
    case Type.UPDATE_POST_SUCCESS:
    case Type.UPDATE_POST_START:
      return null;

    default:
      return prevState;
  }
};

const updatePostReducer = (prevState = null, { type, payload }) => {
  switch (type) {
    case Type.CHOOSE_POST_TO_UPDATE:
      return payload.updatePost;

    case Type.CHOOSE_POST_TO_UPDATE_RESET:
      return null;

    default:
      return prevState;
  }
};

export default combineReducers({
  items: itemsReducer,
  selectTag: selectedTagReducer,
  isLoading: isLoadingPosts,
  error: errorPosts,
  updatePost: updatePostReducer
});
