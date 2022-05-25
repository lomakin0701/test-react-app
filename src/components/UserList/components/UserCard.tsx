import React, {useEffect, useState} from "react";

import {Card, Form, Button, Drawer, Input, Modal} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';

import {useActions} from "../../../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

import style from './UserCard.module.css'

const UserCard: React.FC<{ uid: string }> = ({uid}) => {
    const [visible, setVisible] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {user} = useTypedSelector(state => state.user)

    const {fetchUser} = useActions();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    useEffect(()=> {
        fetchUser(uid);
    }, [uid])
    return (
        <div>
            {user &&(
                <div className={style.card}>
                    <Card title={user.user_fio}>
                        <div className={style.actions}>
                            <Button onClick={showDrawer}><EditOutlined /></Button>
                            <Button onClick={showModal} style={{marginLeft: 6}}><DeleteOutlined /></Button>
                        </div>
                        <p></p>
                        <p>Логин: {user.user_login}</p>
                        <p>Роль: {user.role}</p>
                    </Card>
                </div>

            )}

            <Drawer title="Редактирование сотрудника" placement="right" onClose={onClose} visible={visible}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="ФИО"
                        name="fio"
                        rules={[{ required: true, message: 'Поле ФИО обязательно для заполнения' }]}
                    >
                        <Input value={user?.user_fio} />
                    </Form.Item>
                    <Form.Item
                        label="Логин"
                        name="login"
                        rules={[{ required: true, message: 'Поле логин обязательно для заполнения' }]}
                    >
                        <Input value={user?.user_login} />
                    </Form.Item>
                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Поле пароль обязательно для заполнения' }]}
                    >
                        <Input value={user?.user_login} />
                    </Form.Item>
                    <Form.Item
                        label="Роль"
                        name="role"
                        rules={[{ required: true, message: 'Поле роль обязательно для заполнения' }]}
                    >
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Drawer>

            <Modal title="Удалить сотрудника?" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Удалить сотрудника {user?.user_fio}</p>
            </Modal>
        </div>
    )
}

export default UserCard;
