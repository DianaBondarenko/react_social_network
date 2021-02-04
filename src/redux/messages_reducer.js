const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
        dialogs: [
            {id: 1, name: 'Dasha'},
            {id: 2, name: 'Den'},
            {id: 3, name: 'Max'},
            {id: 4, name: 'Liza'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello)'},
            {id: 3, message: 'How are you doing?'},
            {id: 4, message: 'Great! And you?'}
        ],
        newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT: {
            // let stateCopy = {
            //     ...state,
            //     newMessageText: action.newText
            // };
            // return stateCopy;
            return {
                ...state,
                newMessageText: action.newText
            };
        }
        case SEND_MESSAGE: {
            let newMessage = {id: 5, message: state.newMessageText};
            return  {
                ...state,
                messages: [...state.messages, newMessage],  //=push newMessage
                newMessageText: ''
            };
            //stateCopy.messages.push(newMessage);
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const changeNewMessageTextActionCreator = (text) =>
    ({type: CHANGE_NEW_MESSAGE_TEXT, newText: text});

export default messagesReducer;