import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength30, minLength2, requiredField } from '../../../utils/validators';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {TextArea} from '../../common/FormControls';

const MyPosts = (props) => {
  const postsElement = props.postData.map((post, i) => (
    <Post message={post.message} id={post.id} likesCount={post.liceCount} key={i} />
  ));

  const onAddPost = (data) => {
    props.onAddPost(data.post);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My post</h3>
      <ProfileForm onSubmit={onAddPost} />
      <div>new post</div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={TextArea} name="post" cols="30" rows="10" 
        validate={[requiredField, maxLength30, minLength2]} />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
}

const ProfileForm = reduxForm({
  form: 'ProfileForm',
})(Form);

export default MyPosts;
