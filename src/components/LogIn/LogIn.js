import React, { useState } from 'react'
import classNames from 'classnames'
import { useNavigate, Link } from 'react-router-dom'
import s from '../LogIn/LogIn.module.css'
import logo from '../../media/icons/Logo.svg'
import openEye from '../../media/icons/openEye.svg'
import closeEye from '../../media/icons/closeEye.svg'


function LogIn() {
    const navigate = useNavigate();
    const [infoForm, setInfoForm] = useState({
        email: '',
        password: '',
    });
    const [type, setType] = useState(false);
    const [error, setError] = useState(false);
    const { email, password } = infoForm;

    const handleChange = (e) => {
        setInfoForm({ ...infoForm, [e.target.name]: e.target.value })
    };

    const loginSubmit = (e) => {
        e.preventDefault();
        if (email !== 'zhamila@gmail.com' && password !== 12345) {
            setError(true)
        } else {
            setError(false);
            navigate('/')
        }
    };
    const enabled = email.length > 0 && password.length > 0;

    return (
        <div className="container-fluid pl-0">
            <div className="row">
                <div className="col-lg-6 d-flex">
                    <form onSubmit={loginSubmit} className={classNames(s.login)}>
                        <h2>Вход</h2>
                        {error ? <span className="error">Не правильный пароль или логин </span> : null}
                        <label htmlFor="email">
                            Почта
                            <input onChange={handleChange} type="text" id="email" name="email" />
                        </label>
                        <label htmlFor="password">
                            Пароль
                            <div className={s.password}>
                                <input
                                    type={type ? 'text' : 'password'}
                                    id="password"
                                    value={password}
                                    name="password"
                                    onChange={handleChange}
                                />
                                <button type="button" onClick={() => setType(!type)}>
                                    {type ? (
                                        <img src={openEye} alt="" />
                                    ) : (
                                        <img src={closeEye} alt="" />
                                    )}
                                </button>
                            </div>
                        </label>
                        <a href="/login" className={s.authorization_link}>
                            Забыли пароль?
                        </a>
                        <button disabled={!enabled} type="submit" className={s.save}>
                            Войти
                        </button>
                        <p>
                            <span>У вас нет аккаунта?</span>
                            <Link to="/registration" className={s.authorization_link}>
                                Регистрация
                            </Link>
                        </p>
                    </form>
                </div>

                <div className={classNames('col-lg-6', s.calendar)}>
                    <h2>Calendar</h2>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
}

export default LogIn
