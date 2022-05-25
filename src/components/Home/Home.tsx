import React from "react";
import { Link } from "react-router-dom";
import { PageHeader } from 'antd';

const Home: React.FC = () => {
    return (
        <div>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />

            <div>
                <Link to='users'>Сотрудники</Link>
                <Link to='devices'>Устройства</Link>
            </div>
        </div>
    )
}

export default Home;
