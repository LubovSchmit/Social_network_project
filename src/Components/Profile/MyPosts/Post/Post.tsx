import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    id: number
    message: string
    likesCount: number
}


function Post(props: PostPropsType) {

    return (

        <div className={s.item}>
            <div>

                <img src='http://gaku.ru/lessons/kanji_foto/042_s.jpg'/>
                {props.message}

                <div>
                    <span className={s.like}> like </span>
                    {props.likesCount}

                </div>
            </div>

        </div>
    );
}

export default Post;
