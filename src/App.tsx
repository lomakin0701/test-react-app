import React  from 'react';
import { Menu, Layout } from 'antd';
import type { MenuProps } from 'antd';
import { Routes, Route, Link } from "react-router-dom";
import { useTypedSelector } from "./hooks/useTypedSelector";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";
import Devices from "./components/Devices/Devices";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Пользователи', '1',  <Link to={'/users'}/>),
    getItem('Устройства', '2', <Link to={'/devices'}/>),
];

const App: React.FC = () => {
    const {token} = useTypedSelector(state => state.auth)

    return (
        <div>
            {token && (
                <>
                    <Layout className="layout">
                        <Layout.Header>
                            <div className="logo" />
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['1']}
                                items={items}
                            />
                        </Layout.Header>
                        <Layout.Content style={{ padding: '0 50px' }}>
                            <div style={{ margin: '16px 0' }}></div>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/users" element={<UserList />} />
                                <Route path="/devices" element={<Devices />} />
                            </Routes>
                        </Layout.Content>
                    </Layout>
                </>
            )}
            {!token && (
                <Login />
            )}
        </div>
    )
}

export default App;
