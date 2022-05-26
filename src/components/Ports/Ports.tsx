import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";

import {PageHeader, Table, Form, Button, Input, Select} from "antd";
import {IPort} from "../../types/port";

import style from './Ports.module.css';

const columns: ColumnsType<IPort> = [
    {
        title: 'Пользователь',
        dataIndex: 'user',
        key: 'user',
    },
    {
        title: 'Сервис',
        dataIndex: 'service',
        key: 'service',
    },
    {
        title: 'MAC адрес',
        dataIndex: 'mac',
        key: 'mac',
    },
    {
        title: 'Удаленный IP',
        dataIndex: 'remote_ip',
        key: 'remote_ip',
    },
    {
        title: 'Локальный IP',
        dataIndex: 'local_ip',
        key: 'local_ip',
    },
    {
        title: 'Дата начала',
        dataIndex: 'date_up',
        key: 'date_up',
    },
    {
        title: 'Дата завершения',
        dataIndex: 'date_down',
        key: 'date_down',
    }
];

const Ports: React.FC = () => {
    const {ports, devices, loading, error} = useTypedSelector(state => state.port)
    const {fetchPorts, fetchPortDevices} = useActions();
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        fetchPorts({
            device_id: values.device_id,
            mac_address: values.mac_address
        });
    };

    useEffect(()=> {
        fetchPortDevices()
    },[])


    if (error){
        return <div>{error}</div>
    }

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Статистика портов"
            />
            <div className={style.portsFilter}>
                <Form
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    layout="inline"
                >
                    <Form.Item label="Устройство" name="device_id" >
                        <Select style={{width: 200}}>
                            {devices && devices.map(item => (
                                <Select.Option key={item.device_id} value={item.device_id}>{item.device_name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="mac_address">
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

            {ports.data.length > 0 && (
                <Table columns={columns} dataSource={ports.data} />
            )}
        </div>
    )
}

export default Ports;
