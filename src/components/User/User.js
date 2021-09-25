import React from 'react';
import './User.css'

const User = (props) => {
    // console.log(props.user);
    const { id, first_name, last_name, email, gender, ip_address, img } = props.user;
    return (
        <div className="user">
            <img src={img} alt="" />
            <h4>name: {first_name + ' ' + last_name}</h4>
            <p>id: {id}</p>
            <p>email: {email}</p>
            <p>gender: {gender}</p>
            <p>ip address: {ip_address}</p>
            <button className="btn" onClick={() => props.handleAddToInfo(props.user)}><i className="fas fa-info"></i> see info</button>
        </div>
    );
};

export default User;