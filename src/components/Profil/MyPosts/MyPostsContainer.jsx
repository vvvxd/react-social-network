import {
  addPostCreator,
  postChangeCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(postChangeCreator(text));
    },
    onAddPost: () => {
      dispatch(addPostCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
