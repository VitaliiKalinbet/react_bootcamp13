import React from 'react';
import PropTypes from 'prop-types';
import withToggle from '../../hoc/withToggle';

const ArticleListItem = ({ title, body }) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

ArticleListItem.defaultProps = {
  body: 'no body',
};

ArticleListItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default withToggle(ArticleListItem);
