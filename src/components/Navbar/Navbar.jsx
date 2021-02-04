import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="" /*activeClassName={s.active}*/>News</NavLink></li>
                <li><NavLink to=""/* activeClassName={s.active}*/>Settings</NavLink></li>
                <li><NavLink to="/friends"/* activeClassName={s.active}*/>Friends</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar;