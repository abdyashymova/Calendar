import React, {useContext, useState} from 'react';
import { DatePicker } from 'antd';
import s from './SideBar.module.css'
import 'antd/dist/antd.css';
import calendar from '../../media/icons/calendar.svg'
import GlobalContext from "../../context/GlobalContext";
import NewEvent from "../../modal/NewEvent/NewEvent";
import add from "../../media/icons/add_button.svg";
import CreateEventButton from "../../context/CreateEventButton";


const SideBar = (setShowEventModal) => {
    useContext(GlobalContext);

    // const [modalActive,setModalActive]= useState(true)
    return (

        <div className={s.sidebar}>
            <div className={s.calendar}>
                <img className={s.logo} src={calendar}/>
                <h3 className={s.title1}> Calendar</h3>
            </div>

            <div className={s.sidebar_body}>
                <button   onClick={() => setShowEventModal(true)}
                          className={s.btn}> Создать </button>

                {/*<button*/}
                {/*    onClick={() => setShowEventModal(true)}*/}
                {/*    className="border p-2  rounded flex items-center  " >*/}
                {/*    <span className="pl-3 pr-7"> создать</span>*/}
                {/*</button>*/}
                {/*<NewEvent active = {modalActive} setActive={setModalActive}/>*/}

            </div>

            <div className={s.sidecalendar}>
                <DatePicker showToday={false} style={{visibility: 'hidden'}} open={true} dropdownClassName="main_date" />
            </div>


                <button
                    onClick={() => setShowEventModal(true)}
                    className="border p-2  rounded flex items-center  " >

                    <img src={add} alt="calendar" />
                </button>

            <Labels />
        </div>
    );
};

export default SideBar;

