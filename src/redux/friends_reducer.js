const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'SEND-FOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    friends: [
        // {id: 1, fullName: 'Dasha', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Dnipro', country:'Ukraine'}, Followed: true},
        // {id: 2, fullName: 'Den', status: 'last seen recently', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Kyiv', country:'Ukraine'}, Followed: true},
        // {id: 3, fullName: 'Max', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Dnipro', country:'Ukraine'}, Followed: true},
        // {id: 4, fullName: 'Liza', status: 'last seen 2 hours ago', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Lviv', country:'Ukraine'}, Followed: true}
    ],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW: {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id == action.friendId) {
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
                    if (f.id == action.friendId) {
                        return {...f, Followed: true};
                    }
                    return f;
                })
            };
        }
        case SET_FRIENDS: {
            return {
                ...state,
                friends: action.friends
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalFriendsCount: action.total
            }
        }
        default:
            return state;
    }
}

export const unfollowActionCreator = (friendId) => ({type: UNFOLLOW, friendId: friendId});
export const followActionCreator = (friendId) => ({type: FOLLOW, friendId: friendId});
export const setFriendsActionCreator = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPageActionCreator = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCountActionCreator = (total) => ({type: SET_TOTAL_COUNT, total});


export default friendsReducer;