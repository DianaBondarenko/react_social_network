import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    const path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;