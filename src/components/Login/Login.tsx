import React, {ChangeEvent, useState} from "react";
import { Button, Input } from 'antd';

import styles from './Login.module.css'
import {useActions} from "../../hooks/useActions";

const Login: React.FC = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const {fetchLogin} = useActions();

    const handleChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value)
    }

    const handleChangePass = (e: ChangeEvent<HTMLInputElement>)  => {
        setPassword(e.target.value)
    }

    const onSubmit = async () => {
        fetchLogin({
            login,
            password
        })
    }
    return (
        <div className={styles.container}>
            <h1>Вход</h1>
            <Input value={login} onInput={handleChangeLogin} placeholder={'Введите логин'} />
            <Input type={'password'} value={password} onInput={handleChangePass} placeholder={'Введите пароль'} />
            <Button type="primary" block onClick={onSubmit}>Войти</Button>
        </div>
    )
}

export default Login
