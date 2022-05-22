import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {Routes, Route, Link} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypedSelector";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import UserList from "./components/UserList/UserList";

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

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
    getItem('Пользователи', '1', <Link to={'/users'}/>),
    getItem('Устройства', '2', <Link to={'users'}/>),
];
const App: React.FC = () => {
    const {token} = useTypedSelector(state => state.auth)
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };


    return (
        <div>
            {token && (
                <>
                    <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        inlineCollapsed={collapsed}
                        items={items}
                    />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<UserList />} />
                    </Routes>
                </>

            )}
            {!token && (
                <Login />
            )}
        </div>
    )
}

export default App;
