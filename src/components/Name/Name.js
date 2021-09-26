import React from 'react';
import './Name.css';

const Name = (props) => {
    const { first_name, last_name } = props.user
    return (
        <div>
            <ul>
                <li>
                    {first_name + ' ' + last_name}
                </li>
            </ul>
        </div>
    );
};

export default Name;