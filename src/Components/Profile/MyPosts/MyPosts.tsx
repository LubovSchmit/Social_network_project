import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from '../../../Redux/State';


type MyPostsPropsType = {
    posts: Array<PostType>
}

function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>);

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button className={s.buttonAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
