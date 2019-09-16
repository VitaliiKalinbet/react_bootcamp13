import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsError,
  deletePostStart,
  deletePostSuccess,
  deletePostError,
  addPostStart,
  addPostSuccess,
  addPostError,
  updatePostStart,
  updatePostSuccess,
  updatePostError
} from "./postsActions";
import * as postsAPI from "../../services/api";

export const fetchPostOperation = () => dispatch => {
  dispatch(fetchPostsStart());

  postsAPI
    .getPosts("/posts")
    .then(response => {
      dispatch(fetchPostsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchPostsError(error));
    });
};

export const deletePostOperation = id => dispatch => {
  dispatch(deletePostStart());

  postsAPI
    .deletePost(id)
    .then(() => {
      dispatch(deletePostSuccess(id));
    })
    .catch(error => {
      dispatch(deletePostError(error));
    });
};

export const addPost = post => dispatch => {
  dispatch(addPostStart());

  postsAPI
    .addPost(post)
    .then(response => {
      dispatch(addPostSuccess(response.data));
    })
    .catch(error => {
      dispatch(addPostError(error));
    });
};

export const updatePost = updatePost => dispatch => {
  dispatch(updatePostStart());

  postsAPI
    .updatePost(updatePost)
    .then(() => {
      dispatch(updatePostSuccess(updatePost));
    })
    .catch(error => {
      dispatch(updatePostError(error));
    });
};
