import React, { Component } from "react";
import { connect } from "react-redux";
import * as postsOperations from "../../redux/Posts/postsOperations";
import * as postsSelectors from "../../redux/Posts/postsSelectors";
import * as postsAction from "../../redux/Posts/postsActions";

class PostEditor extends Component {
  state = {
    text: "",
    tag: "",
    isUpdatePost: true
  };

  componentDidUpdate(prevProps, prevState) {
    const { updatePost } = this.props;
    const { isUpdatePost } = this.state;
    if (!updatePost) return;

    if (prevState.text !== updatePost.text && isUpdatePost) {
      this.setState({
        text: updatePost.text,
        tag: updatePost.tag,
        isUpdatePost: false
      });
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChangeUpdatePost = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { updatePost } = this.props;
    if (updatePost) {
      this.props.updatePostFunc({ ...this.state, id: updatePost.id });
    } else {
      this.props.addPostFunc({ ...this.state });
    }

    this.setState({ text: "", tag: "", isUpdatePost: true });
    this.props.updatePostResetFunc();
  };

  render() {
    const { text, tag } = this.state;
    console.log("this.props :", this.props);
    console.log("text :", text);
    console.log("tag :", tag);
    const { updatePost } = this.props;

    return (
      <>
        {updatePost ? (
          <p style={{ color: "red" }}>Post in update</p>
        ) : (
          <p style={{ color: "green" }}>Post in create</p>
        )}
        <form onSubmit={this.handleSubmit}>
          <textarea
            name="text"
            cols="30"
            rows="10"
            value={text}
            onChange={this.handleChange}
          ></textarea>
          <input
            type="text"
            name="tag"
            value={tag}
            onChange={this.handleChange}
          />
          <button type="submit">
            {updatePost ? "Update post" : "Add Post"}
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = store => ({
  updatePost: postsSelectors.getUpdatePost(store)
});

const mapDispatchToProps = {
  addPostFunc: postsOperations.addPost,
  updatePostFunc: postsOperations.updatePost,
  updatePostResetFunc: postsAction.choseUpdatePostReset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEditor);
