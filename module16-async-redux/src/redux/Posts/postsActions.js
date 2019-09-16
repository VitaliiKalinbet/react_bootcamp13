export const Type = {
  FILTER_ITEMS: "FILTER_ITEMS",
  TAG_SELECTED: "TAG_SELECTED",
  FETCH_POSTS_START: "FETCH_POSTS_START",
  FETCH_POSTS_SUCCESS: "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_ERROR: "FETCH_POSTS_ERROR",
  DELETE_POST_START: "DELETE_POST_START",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_ERROR: "DELETE_POST_ERROR",
  ADD_POST_START: "ADD_POST_START",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_ERROR: "ADD_POST_ERROR",
  UPDATE_POST_START: "UPDATE_POST_START",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_ERROR: "UPDATE_POST_ERROR",
  CHOOSE_POST_TO_UPDATE: "CHOOSE_POST_TO_UPDATE",
  CHOOSE_POST_TO_UPDATE_RESET: "CHOOSE_POST_TO_UPDATE_RESET"
};

/*
 * FETCH POST
 */

export const fetchPostsStart = () => ({
  type: Type.FETCH_POSTS_START
});

export const fetchPostsSuccess = posts => ({
  type: Type.FETCH_POSTS_SUCCESS,
  payload: {
    posts: posts
  }
});

export const fetchPostsError = error => ({
  type: Type.FETCH_POSTS_ERROR,
  payload: {
    error: error
  }
});

/*
 * Delete Post
 */
export const deletePostStart = () => ({
  type: Type.DELETE_POST_START
});

export const deletePostSuccess = id => ({
  type: Type.DELETE_POST_SUCCESS,
  payload: {
    id: id
  }
});

export const deletePostError = error => ({
  type: Type.DELETE_POST_ERROR,
  payload: {
    error
  }
});

/*
 * Add Post
 */
export const addPostStart = () => ({
  type: Type.ADD_POST_START
});

export const addPostSuccess = post => ({
  type: Type.ADD_POST_SUCCESS,
  payload: {
    post
  }
});

export const addPostError = error => ({
  type: Type.ADD_POST_ERROR,
  payload: {
    error
  }
});

/*
 * Update Post
 */
export const updatePostStart = () => ({
  type: Type.UPDATE_POST_START
});

export const updatePostSuccess = updatePost => ({
  type: Type.UPDATE_POST_SUCCESS,
  payload: {
    updatePost: updatePost
  }
});

export const updatePostError = error => ({
  type: Type.UPDATE_POST_ERROR,
  payload: {
    error
  }
});

// export const fetchItems = arrItems => ({
//   type: Type.FETCH_ITEMS,
//   payload: arrItems
// });

export const filterItems = selectedTag => ({
  type: Type.FILTER_ITEMS,
  someInfo: selectedTag
});

export const tagSelected = selectedTag => {
  // console.log('selectedTag in action tagSelected :', selectedTag);
  return {
    type: Type.TAG_SELECTED,
    payload: selectedTag
  };
};

export const choseUpdatePost = updatePost => ({
  type: Type.CHOOSE_POST_TO_UPDATE,
  payload: {
    updatePost: updatePost
  }
});

export const choseUpdatePostReset = () => ({
  type: Type.CHOOSE_POST_TO_UPDATE_RESET
});
