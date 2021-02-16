const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'SEND-FOLLOW';
const SET_FRIENDS = 'SET-FRIENDS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE-IS-FOLLOWING-IN-PROGRESS';


let initialState = {
    friends: [
        // {id: 1, fullName: 'Dasha', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Dnipro', country:'Ukraine'}, followed: true},
        // {id: 2, fullName: 'Den', status: 'last seen recently', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg', location:{city: 'Kyiv', country:'Ukraine'}, followed: true},
        // {id: 3, fullName: 'Max', status: 'online', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Dnipro', country:'Ukraine'}, followed: true},
        // {id: 4, fullName: 'Liza', status: 'last seen 2 hours ago', photoUrl:'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg',location:{city: 'Lviv', country:'Ukraine'}, followed: true}
    ],
    pageSize: 5,
    totalFriendsCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProcess: []
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UNFOLLOW: {
            return {
                ...state,
                friends: state.friends.map(f => {
                    if (f.id == action.friendId) {
                        return {...f, followed: false};
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
                        return {...f, followed: true};
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                isFollowingInProcess: action.isFollowingInProcess
                    ? [...state.isFollowingInProcess, action.friendId]
                    : state.isFollowingInProcess.filter(id => id!=action.friendId)
            }
        }

        default:
            return state;
    }
}

//Action Creators

//export const unfollowActionCreator = (friendId) => ({type: UNFOLLOW, friendId: friendId});
export const unfollow = (friendId) => ({type: UNFOLLOW, friendId: friendId});
export const follow = (friendId) => ({type: FOLLOW, friendId: friendId});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalCount = (total) => ({type: SET_TOTAL_COUNT, total});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingInProcess = (isFollowingInProcess, friendId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFollowingInProcess, friendId});

export default friendsReducer;