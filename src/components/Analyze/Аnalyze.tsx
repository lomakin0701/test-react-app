import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";
import {PageHeader, Table} from "antd";
import {fetchSessions} from "../../store/action-creators/session";
import {IAnalyze} from "../../types/analyze";

const columns: ColumnsType<IAnalyze> = [
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
const Analyze: React.FC = () => {
    const {analyzes, loading, error} = useTypedSelector(state => state.analyze)
    const {fetchAnalyze} = useActions();
    useEffect(()=>{
        fetchAnalyze()
    })

    return (
        <div>
            <PageHeader
                className="site-page-header"
                title="Список возможных проблем"
            />
            {loading && (
                <div>Loading...</div>
            )}
            {error && (
                <div>{error}</div>
            )}

            {analyzes.data.length > 0 && (
                <Table columns={columns} dataSource={analyzes.data} />
            )}
        </div>
    )
}

export default Analyze;
