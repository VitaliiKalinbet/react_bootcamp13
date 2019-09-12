/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer/Timer';
import StepSelector from './StepSelector/StepSelector';
import TagFilter from './TagFilter/TagFilter';
import PostList from './PostList/PostListContainer';
// import * as postsActions from '../redux/Posts/postsActions';
import { fetchItems } from '../redux/Posts/postsActions';
import itemsFromJson from '../posts.json';

// console.log(process.env);

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
};

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchItems(itemsFromJson);
  }

  render() {
    return (
      <div style={containerStyle}>
        <Timer />
        <StepSelector />
        <hr style={{ width: '100%' }} />
        <TagFilter />
        <PostList />
      </div>
    );
  }
}

// const MDTP = dispatch => ({
//   fetchItems: items => dispatch(postsActions.fetchItems(items)),
// });

const MDTP = {
  fetchItems,
};

export default connect(
  null,
  MDTP,
)(App);
