import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from '../../../Redux/Store';


type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (newText: string) => void
    addPost: any
}


export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    function onAddPost(props: any) {
        props.addPost()
    }

    function onPostChange(props: any) {
        let text = newPostElement.current?.value
        /* let action = updateNewPostTextActionCreator(props.text)*/
        props.updateNewPostText(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}> </textarea>
            </div>
            <div>
                <button className={s.buttonAddPost} onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


