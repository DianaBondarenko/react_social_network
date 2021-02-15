import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setFriends, setTotalCount, toggleIsFetching,
    unfollow
} from "../../redux/friends_reducer";
import axios from "axios";
import Friends from "./Friends";
import React from "react";
import Preloader from "../Preloader/Preloader";

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
            {withCredentials:true}).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        })
    }

    changePage = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`,{withCredentials:true})
            .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setFriends(response.data.items)
        })
    }

    render() {
        return <>
            {this.props.isFetching?<Preloader/>:null}
            <Friends totalFriendsCount={this.props.totalFriendsCount}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        changePage={this.changePage}
                        friends={this.props.friends}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                        isFetching={this.props.isFetching}/>
        </>
    }

    // render() {
    //     let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize);
    //     let pages = [];
    //     for (let i = 1; i <= pagesCount; i++) {
    //         pages.push(i);
    //     }
    //     return (
    //         <div>
    //             <div className={s.pages}>
    //                 {pages.map(p => {
    //                     if (p<=20) {   // decrease number of pages!!
    //                         return <a className={this.props.currentPage === p && s.selected} onClick={() => {this.changePage(p)}}> {p} </a>
    //                     }
    //                 })}
    //             </div>
    //             {/*<div className={s.pages}>
    //                 <a href="" className={s.selected}>1 </a>
    //                 <a href=""> 2 </a>
    //                 <a href=""> 3 </a>
    //                 <a href=""> 4 </a>
    //             </div>*/}
    //             {
    //                 this.props.friends.map(f =>
    //                     <div>
    //                     <span>
    //                         <div>
    //                             <img
    //                                 src={f.photos.small != null ? f.photos.small : 'https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg'}
    //                                 alt="Ava" className={s.ava}/>
    //                         </div>
    //                         <div>
    //                             {f.Followed
    //                                 ? <button onClick={() => this.props.unfollow(f.id)}>Unfollow</button>
    //                                 : <button onClick={() => this.props.follow(f.id)}>Follow</button>
    //                             }
    //                         </div>
    //                     </span>
    //                         <span>
    //                         <span>
    //                             <div>{f.name}</div>
    //                             <div>{f.status}</div>
    //                         </span>
    //                         <span>
    //                             <div>
    //                                 {"f.location.city"}
    //                             </div>
    //                             <div>
    //                                 {"f.location.country"}
    //                             </div>
    //                         </span>
    //                     </span>
    //                     </div>)
    //             }
    //         </div>
    //     )
    // };
}

let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
    }

}

/*let mapDispatchToProps = (dispatch) => {
    return {
        unfollow: (friendId) => {
            dispatch(unfollowActionCreator(friendId));
        },
        follow: (friendId) => {
            dispatch(followActionCreator(friendId));
        },
        setFriends: (friends) => {
            dispatch(setFriendsActionCreator(friends));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageActionCreator(page));
        },
        setTotalCount: (total) => {
            dispatch(setTotalCountActionCreator(total));
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetching(isFetching));
        }
    }
}*/

export default connect(mapStateToProps, {
    unfollow, follow, setFriends, setCurrentPage, setTotalCount, toggleIsFetching
})(FriendsContainer);