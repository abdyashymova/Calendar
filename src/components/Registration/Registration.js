import React, { useState } from 'react'
import classNames from 'classnames'
import { Space, Select } from 'antd'
import { useNavigate, Link } from 'react-router-dom'
import s from '../Registration/Registration.module.css'
import openEye from '../../media/icons/openEye.svg'
import closeEye from '../../media/icons/closeEye.svg'
import add from  '../../media/icons/add_button.svg'
import logo from '../../media/icons/Logo.svg'


const { Option } = Select

function Registration() {
    const navigate = useNavigate();
    const [infoForm, setInfoForm] = useState({
        name: '',
        surname: '',
        patronomyc: '',
        department: '',
        job: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const [type, setType] = useState({
        password: false,
        confirmPassword: false,
    });

    const { name, department, job, email, password, confirmPassword, surname, patronomyc } = infoForm;
    const handleChange = (e) => {
        setInfoForm({ ...infoForm, [e.target.name]: e.target.value })
    };
    const register = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('password are not same')
        } else {
            navigate('/')
        }
    };
    const enabled = Object.values(infoForm).every((item) => item.length > 0);

    return (
        <div className="container-fluid pl-0">
            <div className="row">
                <div className="col-lg-6 d-flex">
                    <form onSubmit={register} className={classNames(s.register)}>
                        <h2>Добро пожаловать!</h2>
                        <div className="d-flex align-items-center mb-2">
                            <label htmlFor="avatar" className={s.logo_box}>
                                <img src={add} alt="" />
                                <input type="file" id="avatar" style={{ display: 'none' }} />
                            </label>
                            <span className={s.user_text}>Добавьте фото профиля</span>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <label htmlFor="surname">
                                    Фамилия
                                    <input
                                        type="text"
                                        id="surname"
                                        name="surname"
                                        value={surname}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="patronomyc">
                                    Отчество
                                    <input
                                        type="text"
                                        id="patronomyc"
                                        name="patronomyc"
                                        value={patronomyc}
                                        onChange={handleChange}
                                    />
                                </label>

                                <label htmlFor="department">
                                    Отдел
                                    <input className="d-none" />
                                    <Space className="select_full_width mt-1">
                                        <Select
                                            showArrow={false}
                                            defaultValue="Отдел разработки"
                                            className="general_select auth_select"
                                            value={department}
                                            onChange={(value) => setInfoForm({ ...infoForm, department: value })}
                                        >
                                            <Option value="1">Отдел</Option>
                                            <Option value="2">Отдел</Option>
                                            <Option value="3">Отдел</Option>
                                        </Select>
                                    </Space>
                                </label>

                                <label htmlFor="password">
                                    Пароль
                                    <div className={s.password}>
                                        <input
                                            value={password}
                                            type={type.password ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setType({ ...type, password: !type.password })}
                                        >
                                            {type.password ? (
                                                <img src={openEye} alt="" />
                                            ) : (
                                                <img src={closeEye} alt="" />
                                            )}
                                        </button>
                                    </div>
                                </label>
                            </div>

                            <div className="col-lg-6">
                                <label htmlFor="name">
                                    Имя
                                    <input type="text" id="name" name="name" value={name} onChange={handleChange} />
                                </label>

                                <label htmlFor="email">
                                    Почта
                                    <input
                                        value={email}
                                        type="text"
                                        id="email"
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </label>
                                <label htmlFor="job">
                                    Должность
                                    <input className="d-none" />
                                    <Space id="job" className="select_full_width mt-1">
                                        <Select
                                            showArrow={false}
                                            defaultValue="Frontend разработчик"
                                            className="general_select auth_select"
                                            value={job}
                                            onChange={(value) => setInfoForm({ ...infoForm, job: value })}
                                        >
                                            <Option value="1">разработчик</Option>
                                            <Option value="2">разработчик</Option>
                                            <Option value="3">разработчик</Option>
                                        </Select>
                                    </Space>
                                </label>

                                <label htmlFor="confirm-password">
                                    Подтвердить пароль
                                    <div className={s.password}>
                                        <input
                                            value={confirmPassword}
                                            type={type.confirmPassword ? 'text' : 'password'}
                                            id="confirm-password"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setType({ ...type, confirmPassword: !type.confirmPassword })}
                                        >
                                            {type.confirmPassword ? (
                                                <img src={openEye} alt="" />
                                            ) : (
                                                <img src={closeEye} alt="" />
                                            )}
                                        </button>
                                    </div>
                                </label>
                            </div>
                            <div className="col-lg-12">
                                <button disabled={!enabled} type="submit" className={s.save}>
                                    Сохранить
                                </button>
                            </div>
                        </div>
                        <p>
                            <span className={s.span}>У вас есть аккаунт?</span>
                            <Link to="/" className={s.authorization_link}>
                                Войти
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

export default Registration
