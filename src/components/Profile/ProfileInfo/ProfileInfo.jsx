import s from  './ProfileInfo.module.css'
const ProfileInfo = () => {
    return <div className={s.content}>
        <div>
            <img src="https://resources.jetbrains.com/storage/products/jetbrains/img/meta/preview.png" className={s.bg}
                 alt=""/>
        </div>
        <div className={s.description}>
            <img src="https://pbs.twimg.com/profile_images/1276465732923129856/A_SdJ_cW_400x400.jpg" className={s.ava} alt=""/>
            <p>Name</p>
            <p>Description</p>
        </div>
    </div>
}
export default ProfileInfo;