import React, { useEffect, useState } from 'react';
import Info from '../Info/Info';
import User from '../User/User';
import './Users.css';

const Users = () => {
    const [users, setUsers] = useState([]);

    const [info, setInfo] = useState([]);

    // load user data
    useEffect(() => {
        fetch('./users.JSON')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    // event handler for add
    const handleAddToInfo = (user) => {
        const newInfo = [...info, user];
        setInfo(newInfo);
    };


    return (
        <div>
            <div className="users-container">
                <div className="user-container">
                    {
                        users.map(user => <User
                            key={user.id}
                            user={user}
                            handleAddToInfo={handleAddToInfo}
                        ></User>)
                    }
                </div>
                <div className="user-info">
                    <Info
                        users={users}
                        info={info}>
                    </Info>
                </div>
            </div>
        </div>
    );
};

export default Users;