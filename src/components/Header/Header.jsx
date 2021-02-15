import s from './Header.module.css'
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return <header className={s.header}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/JetBrains_Logo_2016.svg/1200px-JetBrains_Logo_2016.svg.png" alt="logo" />
        <span>App</span>
        <div className={s.loginBlock}>
            {props.isAuth?<NavLink to=''>{props.login}</NavLink>:<NavLink to='/login'>login</NavLink>}
        </div>
    </header>
}
export default Header;