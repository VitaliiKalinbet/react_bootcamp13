/* eslint-disable react/prop-types */
import React from 'react';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import withLog from '../../hoc/withLog';
import Togglable from '../../renderProp/Togglable';

const buttonColor = {
  color: 'red',
  fontSize: 20,
  padding: 10,
  display: 'block',
  margin: 10,
};

const ArticleList = ({ articles }) => {
  return (
    <Togglable>
      {({ on, toggle }) => {
        // console.log('on', on);
        // console.log('toggle', toggle);
        return (
          <>
            <button type="button" onClick={toggle} style={buttonColor}>
              {on ? 'HIDE LIST' : 'SHOW LIST'}
            </button>
            {on && (
              <ul>
                {articles.map(article => (
                  <ArticleListItem
                    key={article.objectID}
                    title={article.title}
                    body={article.body}
                  />
                ))}
              </ul>
            )}
          </>
        );
      }}
    </Togglable>
  );
};

export default withLog(ArticleList);
