import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    const sendMessage = () => {
        props.sendMes();
    }
    const onChangeMessage = (e) => {
        const text = e.target.value;
        props.updateNewMessageBody(text);
    }

    const person = props.dialogsPage.dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>);

    const message = props.dialogsPage.messageData
        .map(message => <Message message={message.message} id={message.id} key={message.id}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {person}
            </div>
            <div className={s.messages}>
                <div>
                    {message}
                </div>
                <div>
                    <div><textarea value={props.dialogsPage.newMessage}
                                   cols="20"
                                   rows="2"
                                   className={s.textarea}
                                   onChange={onChangeMessage}
                    /></div>

                    <div>
                        <button onClick={sendMessage}>Отправить</button>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Dialogs;
