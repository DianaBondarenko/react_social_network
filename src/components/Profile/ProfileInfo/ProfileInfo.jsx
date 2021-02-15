import s from  './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <div className={s.content}>
        <div>
            <img src="https://resources.jetbrains.com/storage/products/jetbrains/img/meta/preview.png" className={s.bg}
                 alt=""/>
        </div>
        <div className={s.description}>
            <img src={props.profile.photos.large} className={s.ava} alt=""/>
            <p><b>{props.profile.fullName}</b></p>
            <p>{props.profile.aboutMe}</p>
            <p><a href={"https://"+props.profile.contacts.facebook} target='_blank'>Facebook</a></p>
            <p><a href={"https://"+props.profile.contacts.github} target='_blank'>Github</a></p>
            <p>{props.profile.lookingForAJob?<span>Looking for a job</span>:<span>Not looking for a job</span>}</p>
        </div>
    </div>
}
export default ProfileInfo;