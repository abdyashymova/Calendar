import React from 'react';
import SideBar from "../../components/SideBar/SideBar";
import Dashboard from "../Dashboard/Dashboard";
import s  from './Home.module.css'

const Home = () => {
    return (
        <div className={s.home}>
            <SideBar/>
            <Dashboard/>
        </div>
    );
};

export default Home;