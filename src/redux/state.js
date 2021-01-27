let rerenderEntireDOM = () => {
    console.log('rerender');
}

let state = {
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
        ]
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        likesQuantity: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireDOM();
}

export const changeNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireDOM();
}

export const subscribe = (observer) => {
    rerenderEntireDOM = observer;
}

export default state;