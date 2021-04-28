import React from 'react';
/*import s from './Profile.module.css';*/
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePageType } from '../../Redux/State';

type ProfilePropsType = {
    profilePage: ProfilePageType
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.profilePage.posts}/>
        </div>
    );
}

export default Profile;
