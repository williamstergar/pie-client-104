import React from 'react';
import './Logout.css';
import powerButton from '../../Assets/powerButton.jpg';

const Logout = props => {
    return (
        <div>
            <img id='powerButton' alt='buttonofpower' src={powerButton} />
        </div>
    )
}

export default Logout;