import { connect } from "react-redux";
import { compose } from "redux";
import PostList from "./PostList";
// import withRenderLog from '../hoc/withRenderLog';
import * as postsSelectors from "../../redux/Posts/postsSelectors";
import * as postsOperation from "../../redux/Posts/postsOperations";
import { choseUpdatePost } from "../../redux/Posts/postsActions";

const mapStateToProps = state => ({
  items: postsSelectors.getFilteredItemsWithSelectedTag(state)
});

// const mapDispatchToProps = {
//   deletePost,
// };

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(postsOperation.deletePostOperation(id)),
  updatePost: updatePost => dispatch(choseUpdatePost(updatePost))
});

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
  // withRenderLog,
)(PostList);
