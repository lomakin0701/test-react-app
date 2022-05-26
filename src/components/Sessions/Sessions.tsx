import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";

import {PageHeader, Table, Form, Radio, Button, Input, Col} from "antd";
import {ISession} from "../../types/session";
import {fetchSessions} from "../../store/action-creators/session";

import style from './Sessions.module.css';

const columns: ColumnsType<ISession> = [
    {
        title: 'Пользователь',
        dataIndex: 'user',
    },
    {
        title: 'Сервис',
        dataIndex: 'service',
    },
    {
        title: 'MAC адрес',
        dataIndex: 'mac',
    },
    {
        title: 'Удаленный IP',
        dataIndex: 'remote_ip',
    },
    {
        title: 'Локальный IP',
        dataIndex: 'local_ip',
    },
    {
        title: 'Дата начала',
        dataIndex: 'date_up',
    },
    {
        title: 'Дата завершения',
        dataIndex: 'date_down',
    }
];
const Sessions: React.FC = () => {
    const {sessions, loading, error} = useTypedSelector(state => state.session)
    const {fetchSessions} = useActions();
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        fetchSessions({
            [values.field]: values.field_value
        });
    };

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Статистика сессий"
            />
            <div className={style.sessionFilter}>
                <Form
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    layout="inline"
                    initialValues={{field: 'login'}}
                >
                    <Form.Item name="field">
                        <Radio.Group>
                            <Radio.Button value="login">Логин</Radio.Button>
                            <Radio.Button value="mac_address">Мак адресс</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="field_value" rules={[{ required: true, message: 'Поле обязательно для заполнения' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Отправить запрос
                        </Button>
                    </Form.Item>
                </Form>
            </div>

            {loading && (
                <div>Loading...</div>
            )}
            {error && (
                <div>{error}</div>
            )}

            {sessions.data.length > 0 && (
                <Table columns={columns} dataSource={sessions.data} />
            )}
        </div>
    )
}

export default Sessions;
