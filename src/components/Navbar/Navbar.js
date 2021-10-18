import React from 'react';
import './Navbar.css';
import piePic from '../../Assets/piePic.jpg'
import Logout from '../Logout/Logout';

const Navbar = (props) => {

    return (
        <div>
            <nav>
                <img id='piePic' alt='pie' src={piePic} />
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;