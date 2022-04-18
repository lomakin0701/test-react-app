import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();

    useEffect(()=> {
        fetchUsers()
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
                <div key={item.id}>
                    Юзвверь: {item.name}
                </div>
            ))}
        </div>
    )
}

export default UserList;
