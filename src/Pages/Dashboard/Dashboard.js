import React from 'react';
import s from './Dashboard.module.css'
import Header from "../../components/Header/Header";
import {Calendar} from "antd";

const Dashboard = () => {
    return (
        <div className={s.dashboard}>
        <Header/>
        <Calendar headerRender={() =>false} className="calendar_table"/>
        </div>
    );
};

export default Dashboard;