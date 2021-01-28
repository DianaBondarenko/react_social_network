import s from './MyPosts.module.css'
import Post from "./Post/Post";
import * as React from "react";
import {addPostActionCreator, changeNewPostTextActionCreator} from "../../../redux/profile_reducer";

const MyPosts = (props) => {

    let PostsElements = props.posts.map(p => <Post message={p.message} likesQuantity={p.likesQuantity}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(changeNewPostTextActionCreator(text));
    }

    return (
        <div className={s.posts}>My posts
            <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            {PostsElements}
        </div>
    )
}

export default MyPosts;