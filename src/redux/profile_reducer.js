const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi! It's my 1st post", likesQuantity: 21},
        {id: 2, message: 'How are you doing?))', likesQuantity: 35},
        {id: 3, message: 'What a perfect weather!', likesQuantity: 30}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesQuantity: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostTextActionCreator = (text) =>
    ({type: CHANGE_NEW_POST_TEXT, newText: text});

export default profileReducer;
