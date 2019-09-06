import React from 'react';
import './UserOutput.css'

    const useroutput = (props) => {
        return (
        <div className='UserOutput'>
            <p>User {props.username} and {props.para1}</p>
            <p>User {props.username} and {props.para2}</p>
        </div>
        )
    };

export default useroutput;
