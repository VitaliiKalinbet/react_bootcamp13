/* eslint-disable react/prop-types */
import React from 'react';

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map(article => (
      <li key={article.objectID}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
      </li>
    ))}
  </ul>
);

export default ArticleList;
