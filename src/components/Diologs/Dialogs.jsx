import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';
import AddMessageForm from './AddMessageForm';

const Dialogs = (props) => {
  const sendMessage = (data) => {
    props.sendMes(data.newMessageBody);
  };

  const person = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />
  ));

  const message = props.messageData.map((message) => (
    <Message message={message.message} id={message.id} key={message.id} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{person}</div>
      <div className={s.messages}>
        <div>{message}</div>
        <AddMessageForm onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
