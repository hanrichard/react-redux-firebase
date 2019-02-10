import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const Signedinlink = (props) => {
    return (
        <ul className="right">
            <li><NavLink to="/createproject">New project</NavLink></li>
            <li><a onClick={ props.signout}>Logout</a></li>
            <li><NavLink to="/" className='btn btn-flaoting pink'>NN</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Signedinlink)