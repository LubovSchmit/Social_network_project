import React from 'react';
import s from './Friends.module.css';

type FriendsPropsType = {
    id: number
    name: string
}

function Friends(props: FriendsPropsType) {
    return (
        <div className={s.item}>
            {props.name}
        </div>
    );
}

export default Friends;