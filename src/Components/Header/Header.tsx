import React from 'react';
import s from './Header.module.css';

function Header() {
    return (
        <header className={s.header}>
           hey <img
                src='http://gaku.ru/lessons/kanji_foto/049_s.jpg'/>
        </header>
    );
}

export default Header;