import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';

import style from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Главная"
            />

            <div className={style.root}>
                <Link to='/users'>Пользователи</Link>
                <Link to='/devices'>Устройства</Link>
                <Link to='/ports'>Статистика портов</Link>
                <Link to='/sessions'>Статистика сессий</Link>
            </div>
        </div>
    )
}

export default Home;
