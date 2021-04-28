import React from 'react';
import s from './ProfileInfo.module.css';



function ProfileInfo(props: any) {
    return (
        <div>
            <div>
                <img className={s.photo}
                     src='https://p4.wallpaperbetter.com/wallpaper/352/18/330/4k-landscape-8k-panorama-wallpaper-thumb.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + Description
            </div>
            {/*<div>
                <img className={s.imgAva} src='https://lh3.googleusercontent.com/proxy/IJoY4Hh5dpTRExmJGYD6jywST8HMewB2gYVNSJa9bqM6eg7qkv19CteGj916Z1HJRipbVSvQKFqkp5j5nlp6qXzGILIr4qQAu1UYadZV9BB4cy2OiK9Z9K5Vzw--9_o'/>
            </div>*/}
        </div>
    );
}

    export default ProfileInfo;