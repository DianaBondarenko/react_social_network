import * as React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile_reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        props.store.dispatch( changeNewPostTextActionCreator(text) );
    }

    return (
        <MyPosts changeNewPostText={onPostChange} addPost={addPost}
                 posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} />
    )
}

export default MyPostsContainer;