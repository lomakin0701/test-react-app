import React, {useEffect} from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

import { Table } from 'antd';


const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

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
            {users.map(item => (
                <div key={item.user_id}>
                    Юзвверь: {item.user_login}
                </div>
            ))}
        </div>
    )
}

export default UserList;
