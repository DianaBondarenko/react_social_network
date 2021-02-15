import {combineReducers, createStore} from "redux";
import profileReducer from "./profile_reducer";
import messagesReducer from "./messages_reducer";
import friendsReducer from "./friends_reducer";
import authReducer from "./auth_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth: authReducer
});

let store = createStore(reducers);
window.store = store;

export default store;