import React from 'react';
import Name from '../Name/Name';
import './Info.css';

const Info = (props) => {
    // console.log(props);
    const { info } = props;
    // console.log(info);
    let total = 0;
    for (const id of info) {
        console.log(id);
        total = total + id.id;
    }
    return (
        <div className="info">
            <h2>User Name:</h2>
            {info.map(user => <Name
                key={user.id}
                user={user}>
            </Name>)}
            <h2>Total user: {info.length}</h2>
            <h2>sum of id: {total}</h2>
        </div>
    );
};

export default Info;