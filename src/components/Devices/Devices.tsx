import React, {useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";

import {Drawer, PageHeader, Space, Table, Button, Row, Col} from "antd";
import {IDevice} from "../../types/device";
import DeviceCard from "./components/DeviceCard";
const Devices: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const {devices, loading, error} = useTypedSelector(state => state.device)
    const {fetchDevices} = useActions();

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const columns: ColumnsType<IDevice> = [
        {
            title: 'Название',
            dataIndex: 'device_name',
            key: 'device_name',
        },
        {
            title: 'Вышестоящее устройство',
            dataIndex: 'parent_name',
            key: 'parent_name',
        },
        {
            title: 'IP',
            dataIndex: 'device_ip',
            key: 'device_ip',
        }
    ];
    useEffect(()=> {
        fetchDevices();
    },[])

    if(loading){
        return <div>Loading...</div>
    }

    if (error){
        return <div>{error}</div>
    }

    // @ts-ignore
    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Устройства"
            />
            <Row>
                <Col span={16}>
                    <Table columns={columns} dataSource={devices.data} />
                </Col>
                <Col span={8}>
                    <DeviceCard />
                </Col>
            </Row>


            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </div>
    )
}

export default Devices;
