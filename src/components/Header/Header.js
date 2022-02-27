import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
import {link} from 'react-router-dom'
const header = () => {
    return (
        <div className="header" >
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
               <a href="/review">Oreder review </a>
            <a href="/manage">Manage inventory</a>
            </nav>
        </div>
    );
};

export default header;