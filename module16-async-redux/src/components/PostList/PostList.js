/* eslint-disable react/prop-types */
import React from "react";

const PostList = ({ items = [], deletePost, updatePost }) => {
  // console.log('items in PostList:', items);
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.text}</p>
          <button type="button" onClick={() => deletePost(item.id)}>
            Delete
          </button>
          <button type="button" onClick={() => updatePost(item)}>
            Update
          </button>
          <p>Tag: {item.tag}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
