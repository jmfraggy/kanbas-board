import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {

    return (
        <nav className='navbar bg-primary'>
            <a href="/" className="brand-logo">
                <i
                    
                    className="padding-icon material-icons">
                        {icon}
                </i>{title}
            </a>
        </nav>
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

export default Navbar
