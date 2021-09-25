import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('./MOCK_DATA.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h2>Users details</h2>
        </div>
    );
};

export default Users;