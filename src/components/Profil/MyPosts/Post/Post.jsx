import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://peopletalk.ru/wp-content/uploads/2017/11/1480331127.jpg?opt=true"
        alt=""
      />
      {props.message}
      <div>
        <span>like </span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
