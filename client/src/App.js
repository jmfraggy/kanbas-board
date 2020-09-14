import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Private Route
import PrivateRoute from './components/routing/PrivateRoute';
// Materialize 
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
// Components 
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Home from './components/pages/Home';
// Redux 
import { Provider } from 'react-redux';
import store from './store/store';
// Set Token
import setAuthToken from './utils/setAuthToken';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/' component={Home} />
            </Switch>
          </div>

        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
