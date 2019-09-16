/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { connect } from "react-redux";
import TagFilter from "./TagFilter/TagFilter";
import PostList from "./PostList/PostListContainer";
// import * as postsActions from '../redux/Posts/postsActions';
import * as postsOperation from "../redux/Posts/postsOperations";
import PostEditor from "./PostEditor/PostEditor";

// console.log(process.env);

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh"
};

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div style={containerStyle}>
        <PostEditor />
        <hr style={{ width: "100%" }} />
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
  fetchItems: postsOperation.fetchPostOperation
};

export default connect(
  null,
  MDTP
)(App);
