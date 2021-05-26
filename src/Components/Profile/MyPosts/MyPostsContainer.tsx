import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../Redux/profile-reducer';
import {PostType} from '../../../Redux/Store';
import {MyPosts} from './MyPosts';


type MyPostsContainerPropsType = {
    store: any

    /*posts: Array<PostType>
    newPostText: string
    dispatch: any
    updateNewPostText: (newText: string) => void*/

}

export function MyPostsContainer(props: MyPostsContainerPropsType) {

let state = props.store.getState()

    function addPost(props: any) {
        props.store.dispatch(addPostActionCreator())
    }

    function onPostChange(text: string) {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action);

    }
    return (<MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}

    />)
}



