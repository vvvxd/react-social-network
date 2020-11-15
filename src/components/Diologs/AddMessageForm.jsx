import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength30, minLength2, requiredField } from '../../utils/validators';
import { TextArea } from '../common/FormControls';
import s from './Dialogs.module.css';

function Form({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name="newMessageBody"
          validate={[requiredField, maxLength30, minLength2]}
          className={s.textarea}
        />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
}

const AddMessageForm = reduxForm({
  form: 'dialogAddMessageForm',
})(Form);

export default AddMessageForm;
