import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlink from './Signedinlink';
import Signoutlink from './Signoutlink';

const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className=" floating left">logo</Link>
                <Signedinlink />
                <Signoutlink />
            </div>
        </nav>
    )
}

export default Navbar