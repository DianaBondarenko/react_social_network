import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import React from "react";
import {sendMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/messages_reducer";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);
    let newMessageText = props.state.newMessageText;

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(changeNewMessageTextActionCreator(text));
    }
    let sendMessage = () => {
        props.dispatch(sendMessageActionCreator())
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