import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { requiredField } from '../../utils/validators';
import { Input } from '../common/FormControls';
import styles from '../common/FormControls//TextArea.module.css';
function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          name="email"
          validate={[requiredField]}
          component={Input}
          plaseholder="login"
        />
      </div>
      <div>
        <Field
          type="password"
          name="password"
          component={Input}
          plaseholder="Password"
          validate={[requiredField]}
        />
      </div>
      <div>
        <Field type="checkbox" name="rememberMe" component={Input} plaseholder="login" />
        remember me
      </div>

      {props.error && <div className={styles.formErroe}>{props.error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: 'Login',
})(LoginForm);

export default LoginReduxForm;
