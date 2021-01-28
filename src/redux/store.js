import profileReducer from "./profile_reducer";
import dialogs_reducer from "./messages_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi! It's my 1st post", likesQuantity: 21},
                {id: 2, message: 'How are you doing?))', likesQuantity: 35},
                {id: 3, message: 'What a perfect weather!', likesQuantity: 30}
            ],
            newPostText: ''
        },
        messagesPage: {
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
            newMessageText: '',

        }
    },
    _callSubscriber() {
        console.log('rerender');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = dialogs_reducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

window.store = store;

export default store;