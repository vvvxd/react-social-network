import React from 'react';
import styles from './TextArea.module.css';


export  const TextArea=({ input, meta: { touched, error, warning }, ...props})=> {
  return (
    <div className={touched && error && styles.error}>
      <textarea name="" id="" cols="20" rows="5" {...input}></textarea>
      {touched && error && <p>{error}</p>}
    </div>
  );
}
export  const Input=({ input, meta: { touched, error, warning },type, ...props })=> {
  return (
    <div className={touched && error && styles.error}>
      <input type={type} name=""  {...input}></input>
      {touched && error && <p>{error}</p>}
    </div>
  );
}