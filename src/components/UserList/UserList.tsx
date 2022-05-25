import React, { useState, useEffect } from 'react';
import {Drawer, Button, PageHeader, Row, Col} from 'antd';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import {IUser} from "../../types/user";
import UserCard from "./components/UserCard";

const columns: ColumnsType<IUser> = [
    {
        title: 'ФИО',
        dataIndex: 'user_fio',
        key: 'user_fio',
    },
    {
        title: 'Логин',
        dataIndex: 'user_login',
        key: 'user_login',
    },
    {
        title: 'Роль',
        dataIndex: 'role',
        key: 'role',
    }
];

const UserList: React.FC = () => {
    const [uid, setUid] = useState('');
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    const onSelect = (record: IUser) => {
        setUid(record.user_id)
    }

    useEffect(()=> {
        fetchUsers();
    },[])

    if(loading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>{error}</div>
    }

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Пользователи"
            />
            <Row>
                <Col span={16}>
                    <Table
                        columns={columns}
                        dataSource={users}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: event => {onSelect(record)}, // click row
                            };
                        }}
                    />
                </Col>
                <Col span={8}>
                    <UserCard uid={uid} />
                </Col>
            </Row>
        </div>
    )
}

export default UserList;
