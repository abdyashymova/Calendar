import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogIn from './components/LogIn/LogIn';
import Registration from "./components/Registration/Registration";
import Home from "./Pages/Home/Home";
function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home pageName="Главная страничка"/>}/>
                <Route path="/login" element={<LogIn/>}/>
                <Route path="/registration" element={<Registration/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;