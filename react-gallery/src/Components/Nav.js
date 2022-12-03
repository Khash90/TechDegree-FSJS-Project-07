import React from 'react';
import { NavLink } from 'react-router-dom';

//Nav items
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='/batman'>Batman</NavLink></li>
                <li><NavLink to='/catwoman'>Catwoman</NavLink></li>
                <li><NavLink to='/venom'>Venom</NavLink></li>
            </ul>
        </nav>
    );
};

export default Nav;