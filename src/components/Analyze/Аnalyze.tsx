import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {ColumnsType} from "antd/lib/table";
import {PageHeader, Table} from "antd";

import {IAnalyze} from "../../types/analyze";

const columns: ColumnsType<IAnalyze> = [
    {
        title: 'Тип',
        dataIndex: 'type',
    },
    {
        title: 'Сообщение',
        dataIndex: 'message',
    },
    {
        title: 'Кол-во',
        dataIndex: 'count',
    },
];
const Analyze: React.FC = () => {
    const {analyzes, loading, error} = useTypedSelector(state => state.analyze)
    const {fetchAnalyze} = useActions();
    useEffect(()=>{
        fetchAnalyze()
    }, [])

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
