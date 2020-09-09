import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElement = props.postData
        .map((post, i) =>
            <Post message={post.message} id={post.id} likesCount={post.liceCount} key={i}/>);

    const newPostElement = React.createRef()

    const onAddPost = () => {
        props.onAddPost();
    };

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea cols="30" rows="10" ref={newPostElement} value={props.newPostText}
                              onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div>
                new post
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
};
export default MyPosts;