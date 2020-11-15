import {
  addPostCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: (data) => {
      dispatch(addPostCreator(data));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
