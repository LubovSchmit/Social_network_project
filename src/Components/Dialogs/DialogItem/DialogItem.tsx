import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} activeClassName={s.activeLink}> {props.name} </NavLink>
        </div>
    )
}


export default DialogItem;