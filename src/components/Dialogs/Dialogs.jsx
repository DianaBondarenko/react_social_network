import s from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'
import Message from './Message/Message'
import * as React from "react";

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>);

    let newMesssageElement = React.createRef();
    let sendMessage = () => {
        let text = newMesssageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.chat}>
                {messageElements}
            </div>

            <textarea ref={newMesssageElement}></textarea>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}


export default Dialogs;