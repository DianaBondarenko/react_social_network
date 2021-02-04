import Friends from "./Friends";
import {connect} from "react-redux";
import {followActionCreator, setFriendsActionCreator, unfollowActionCreator} from "../../redux/friends_reducer";
import FriendsCl from "./FriendsCl";

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        unfollow: (friendId) => {
            dispatch(unfollowActionCreator(friendId));
        },
        follow: (friendId) => {
            dispatch(followActionCreator(friendId));
        },
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends));
        }
    }
}
const FriendsContainer = connect (mapStateToProps, mapDispatchToProps)(FriendsCl);
export default FriendsContainer;