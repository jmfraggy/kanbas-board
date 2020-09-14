import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { connect } from 'react-redux'
import { login, clearErrors } from '../../store/actions/authActions';

// Materialize
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = ({ login, error, isAuthenticated, clearErrors }) => {
    let history = useHistory();

    useEffect(() => {
        // Redirect to home
        if (isAuthenticated) {
            history.push('/');
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, history]);

    // Temp State
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function when the user click the register button
    const onSubmit = () => {
        // Validate Temp State
        if(email === '' || password === '') {
            M.toast({ html: 'Please enter all, fields!' });
        } else if(error === 'User already exists') {
            M.toast({ html: 'User already exists' });
        }else {
            // Pass the elements to the redux action that register
            login({
                email,
                password
            });
            clearErrors();
            // Clear Temp State
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div>
            <div id="register-page" className="row">

                <div className="col s12 z-depth-6 card-panel card-register">
                <h4>Account Login</h4>

                    <br/>
                    <form className="register-form">
                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="mdi-communication-email "></i>
                                <input 
                                    type="email" 
                                    onChange={e => setEmail(e.target.value)}
                                    required/>
                                <label htmlFor="email" className="center-align">Email</label>
                            </div>
                        </div>
                        <div className="row margin">
                            <div className="input-field col s12">
                                <i className="mdi-action-lock-outline "></i>
                                <input 
                                    type="password" 
                                    minLength="7" 
                                    onChange={e => setPassword(e.target.value)}
                                    required/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <a 
                                    href="#!" 
                                    className="btn-small deep-purple accent-3 waves-effect waves-light col s12"
                                    onClick={onSubmit}>
                                        Enter
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
