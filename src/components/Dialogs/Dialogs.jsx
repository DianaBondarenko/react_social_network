import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from "react";

const Dialogs = (props) => {

    let dialogsElements = props.messagesPage.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageElements = props.messagesPage.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageText = props.messagesPage.newMessageText;

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.changeNewMessageText(text);
    }
    let sendMessage = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onMessageChange}
                                   value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;