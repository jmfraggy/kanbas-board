import React, { useLayoutEffect } from 'react';

// Components
import Todos from '../Lists/Todos';
import Progresses from '../Lists/Progresses';
import Dones from '../Lists/Dones';
import AddButton from '../layout/AddButton';
import AddListModal from '../modals/AddListModal';
import EditListModal from '../modals/EditListModal';

// Redux
import { loadUser } from '../../store/actions/authActions';
import { connect } from 'react-redux';

const Home = ({ loadUser }) => {

    // Check for the user, then render the component
    useLayoutEffect(() => {
        loadUser();
        // eslint-disable-next-line
    }, []);

    return (
        <div className="container grid-3">
            <AddButton />
            <AddListModal />
            <EditListModal />

            <Todos />
            <Progresses />
            <Dones />
        </div>
    )
}

// connect recieve state, functions and encapsulate the component
export default connect(null, { loadUser })(Home);
