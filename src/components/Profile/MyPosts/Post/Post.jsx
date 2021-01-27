import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src="https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg" alt=""/>
        <span>{props.message}</span>
        <div>
            likes: {props.likesQuantity}
        </div>
    </div>
}
export default Post;