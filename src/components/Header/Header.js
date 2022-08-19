import React from 'react';
import s from "./Header.module.css"
import search from "../../media/icons/search.svg"
import notified from "../../media/icons/notified.svg"
import user from "../../media/icons/1.svg"

const Header = () => {
    return (
        <div className={s.header}>
            <div>
            <button className={s.today}>Сегодня</button>
            <button className={s.day}>День</button>
            </div>
            <div className={s.header_body}>
                <div>
                    <button className={s.search}>
                        <img src={search}/>
                    </button>
                    <button className={s.notified}>
                        <img  src={notified}/>
                    </button>
                </div>
                <div>
                    <img className={s.user} src={user}/>
                </div>
            </div>

            </div>

    );
};

export default Header;
