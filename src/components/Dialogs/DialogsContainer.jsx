import {sendMessageActionCreator, changeNewMessageTextActionCreator} from "../../redux/messages_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    let onMessageChange = (text) => {
        props.store.dispatch(changeNewMessageTextActionCreator(text));
    }

    let sendMessage = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    return (
        <Dialogs changeNewMessageText={onMessageChange} sendMessage={sendMessage} messagesPage={state.messagesPage}/>
    )
}
//
// let mapStateToProps = (state) => {
//     return {
//         messagesPage: state.messagesPage
//     }
// }
//
// let dispatchToProps = (dispatch) => {
//     return {
//         changeNewMessageText: (text) => {
//             dispatch(changeNewMessageTextActionCreator(text));
//         },
//         sendMessage: () => {
//             dispatch(sendMessageActionCreator())
//         }
//     }
// }
//
// const DialogsCont = connect(mapStateToProps, dispatchToProps)(Dialogs);

export default DialogsContainer;