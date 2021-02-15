const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: "Hi! It's my 1st post", likesQuantity: 21},
        {id: 2, message: 'How are you doing?))', likesQuantity: 35},
        {id: 3, message: 'What a perfect weather!', likesQuantity: 30}
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                message: state.newPostText,
                likesQuantity: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case CHANGE_NEW_POST_TEXT: {
            return  {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return  {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changeNewPostTextActionCreator = (text) =>
    ({type: CHANGE_NEW_POST_TEXT, newText: text});
export const setFriendProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;
