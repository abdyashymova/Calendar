import React from 'react';
import s from './Dashboard.module.css'
import Header from "../../components/Header/Header";

const Dashboard = () => {
    return (
        <div className={s.dashboard}>
        <Header/>
        </div>
    );
};

export default Dashboard;