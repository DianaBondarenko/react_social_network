const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'SEND-FOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';

let initialState = {
        friends: [
            // {id: 1, fullName: 'Dasha', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Dnipro', country:'Ukraine'}, Followed: true},
            // {id: 2, fullName: 'Den', status: 'last seen recently', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Kyiv', country:'Ukraine'}, Followed: true},
            // {id: 3, fullName: 'Max', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Dnipro', country:'Ukraine'}, Followed: true},
            // {id: 4, fullName: 'Liza', status: 'last seen 2 hours ago', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Lviv', country:'Ukraine'}, Followed: true}
        ],
        friendsOnPage: 4,
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW: {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id == action.friendId){
                        return {...f, Followed: false};
                    }
                    return f;
                })
            };
        }
        case FOLLOW: {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id == action.friendId){
                        return {...f, Followed: true};
                    }
                    return f;
                })
            };
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: [...state.friends, ...action.friends]
            }
        }
        default:
            return state;
    }
}

export const unfollowActionCreator = (friendId) => ({type: UNFOLLOW, friendId: friendId});
export const followActionCreator = (friendId) => ({type: FOLLOW, friendId: friendId});
export const setFriendsActionCreator = (friends) => ({type: SET_FRIENDS, friends});

export default friendsReducer;