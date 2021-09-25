import React from 'react';
import './Info.css';

const Info = (props) => {
    console.log(props);
    const { info } = props;
    console.log(info);
    let total = 0;
    for (const id of info) {
        console.log(id);
        total = total + id.id;
    }
    return (
        <div className="info">
            <h2>User Name:{info.name}</h2>
            <h2>Total user: {info.length}</h2>
            <h2>sum of id: {total}</h2>
        </div>
    );
};

export default Info;