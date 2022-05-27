import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";

import {PageHeader, Table, Form, Button, Input, Select} from "antd";
import {IPort} from "../../types/port";

import style from './Ports.module.css';

const columns: ColumnsType<IPort> = [
    {
        title: 'IP устройства',
        dataIndex: 'device_ip',
        key: 'device_ip',
    },
    {
        title: 'Название устройства',
        dataIndex: 'device_name',
        key: 'device_name',
    },
    {
        title: 'Название',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Ошибки',
        dataIndex: 'error',
        key: 'error',
    },
    {
        title: 'Длина',
        dataIndex: 'length',
        key: 'length',
    },
    {
        title: 'Pon MAC',
        dataIndex: 'pon_mac',
        key: 'pon_mac',
    },
    {
        title: 'Дерево',
        dataIndex: 'tree',
        key: 'tree',
    },
    {
        title: 'Порт',
        dataIndex: 'port',
        key: 'port',
    },
    {
        title: 'Сигнал',
        dataIndex: 'signal',
        key: 'signal',
    },
    {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status',
    },
    {
        title: 'USR',
        dataIndex: 'usr_mac',
        key: 'usr_mac',
    },

    {
        title: 'Дата создания',
        dataIndex: 'create_dt',
        key: 'create_dt',
    },
    {
        title: 'Дата обновления',
        dataIndex: 'update_dt',
        key: 'update_dt',
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
                            <Select.Option key="" value="">Не выбрано</Select.Option>
                            {devices && devices.map(item => (
                                <Select.Option key={item.device_id} value={item.device_id}>{item.device_name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item name="mac_address">
                        <Input placeholder={"Mac address"} />
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
