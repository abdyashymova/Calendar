import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from "./components/LogIn/LogIn";
import Registration from "./components/Registration/Registration";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
function App(){
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/Home" element={<Home pageName="Главная страничка"/>}/>
                <Route path="/LogIn" element={<LogIn/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;