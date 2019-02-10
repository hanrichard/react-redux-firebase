import React from 'react';
import { NavLink } from 'react-router-dom';

const Signedinlink = () => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New project</NavLink></li>
            <li><NavLink to="/">Logout</NavLink></li>
            <li><NavLink to="/" className='btn btn-flaoting pink'>NN</NavLink></li>
        </ul>
    )
}

export default Signedinlink