import React from 'react';
import { DatePicker } from 'antd';
import s from './SideBar.module.css'
import 'antd/dist/antd.css';
import calendar from '../../media/icons/calendar.svg'
const SideBar = () => {
    return (
        <div className={s.sidebar}>
        <div className={s.calendar}>
            <img className={s.logo} src={calendar}/>
            <h3 className={s.title1}> Calendar</h3>
        </div>

            <div className={s.sidebar_body}>
            <button
                    type="button" className={s.btn}>
                Создать </button>


            <div className={s.sidecalendar}>
                <DatePicker showToday={false} style={{visibility: 'hidden'}} open={true} dropdownClassName="main_date" />


                </div>
            </div>

    </div>
    );
};

export default SideBar;