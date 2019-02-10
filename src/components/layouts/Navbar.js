import React from 'react';
import { Link } from 'react-router-dom';
import Signedinlink from './Signedinlink';
import Signoutlink from './Signoutlink';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { auth } = props;
    // console.log(auth)
    const links = auth.uid ? <Signedinlink /> : <Signoutlink /> 
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className=" floating left">logo</Link>

                { links }
                
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar)