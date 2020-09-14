import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { loadUser } from '../../store/actions/authActions';
// Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

const PrivateRoute = ({ 
        loading, 
        isAuthenticated, 
        component: Component, 
        ...rest }
    ) => {
    
    useEffect(() => {
        loadUser();
        // Initialize Materialize JS
        M.AutoInit();
    }, []);

    return (
        <Route {...rest} render={props => !isAuthenticated && !loading ? (
            <Redirect to='/login' />
        ) : (
                <Component {...props} />
            )} />
    )
}

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    loading: state.auth.loading
});

// connect recieve state, functions and encapsulate the component
export default connect(mapStateToProps, { loadUser })(PrivateRoute);
