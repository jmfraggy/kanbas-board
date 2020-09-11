import React, { useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

import Navbar from './components/layout/Navbar';
import Todos from './components/Todos';
import Progresses from './components/Progresses';
import Dones from './components/Dones';

import AddButton from './components/layout/AddButton';
import AddListModal from './components/modals/AddListModal';
import EditListModal from './components/modals/EditListModal';

import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  useEffect(() => {
    // Initialize Materialize JS
    M.AutoInit();
  }, []);

  return (
    <Provider store={store}>
      <Router>
      <div className= "App">
        <Navbar />

        <div className="container grid-3">
          <AddButton />
          <AddListModal />
          <EditListModal />

          <Todos />
          <Progresses />
          <Dones />

        </div>

      </div>
      </Router>
    </Provider>
  );
}

export default App;
