import React from 'react';
/*import s from './Profile.module.css';*/
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


type ProfilePropsType = {
    store: any
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}
                /*posts={props.profilePage.posts}
                newPostText={props.profilePage.newPostText}
                dispatch={props.dispatch}
                updateNewPostText={props.updateNewPostText}*/
            />
        </div>
    );
}

export default Profile;
