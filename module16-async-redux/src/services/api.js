import axios from "axios";

axios.defaults.baseURL = "http://localhost:4040";

export const getPosts = url => axios.get(url);

export const deletePost = id => axios.delete(`/posts/${id}`);

export const addPost = post => axios.post("/posts", post);

export const updatePost = updatePost =>
  axios.put(`/posts/${updatePost.id}`, updatePost);
