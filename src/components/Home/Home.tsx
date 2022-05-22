import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
    return (
        <div>
            <Link to='users'>Сотрудники</Link>
            <Link to='users'>Что то еще</Link>
        </div>
    )
}

export default Home;
