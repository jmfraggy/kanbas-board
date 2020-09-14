import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { clearLists } from '../../store/actions/listActions';

const Navbar = ({ 
    icon, 
    title, 
    isAuthenticated, 
    logout, 
    clearLists }) => {

    const onLogout = () => {
        logout();
        clearLists();
    };

    const authLinks = (
        <Fragment>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt" /> <span>Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <li>
                <Link to='/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h5><a href="/" className="brand-logo">
                <i className="padding-icon material-icons">
                        {icon}
                </i> {title}
            </a> </h5>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
        </div>
    )
}

Navbar.defaultProps = {
    title: 'Kanban',
    icon: 'nfc'
}

// Prevent Errors, kind of using typescript
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
});

// connect recieve state, functions and encapsulate the component
export default connect( mapStateToProps, { logout, clearLists })(Navbar);
