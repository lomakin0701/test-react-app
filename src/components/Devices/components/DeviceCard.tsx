import React from "react";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {Button} from "antd";

const DeviceCard: React.FC = () =>{
    const {device} = useTypedSelector(state => state.device)

    return (
        <div>
            {device &&(
                <div>
                    <div>
                        <Button>Редактировать</Button>
                        <Button>Удалить</Button>
                    </div>

                    {device?.device_id}
                    {device?.device_id}
                    {device?.device_name}
                    {device?.count}
                </div>
            )}

        </div>
    )
}

export default DeviceCard;
