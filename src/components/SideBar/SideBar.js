import React from 'react';
import s from './SideBar.module.css'
import calendar from '../../media/icons/calendar.svg'
const SideBar = () => {
    return (
        <div className={s.sidebar}>
        <div className={s.calendar}>
            <img className={s.logo} src={calendar}/>
            <h3 className={s.title1}> Calendar</h3>
        </div>

            <div>
            <button
                    type="button" className={s.btn}>
                Создать </button>
            </div>

    </div>
    );
};

export default SideBar;