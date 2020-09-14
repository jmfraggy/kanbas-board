import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// Redux
import { getTodos } from '../../store/actions/listActions';
import { connect } from 'react-redux';
// Components
import Card from './Card';
import Loader from '../layout/Loader';

const Todos = ({ todo, loading, getTodos }) => {

    // Load List of Todos When the component Mount
    useEffect(() => {
        getTodos();
        // eslint-disable-next-line
    }, []);

    if(loading || todo === null) {
        return <Loader />;
    }

    return (
        <ul className="">
            <li className="">
                <h4 className="center">To Do</h4>
            </li>
            {!loading && todo.length === 0 ? (<p className="center">Empty</p>) : (
                todo.map(el => <Card key={el._id} el={el} />)
            )}
        </ul>
    )
}

Todos.propTypes = {
    todo: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    getTodos: PropTypes.func.isRequired
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    todo: state.list.todo,
    loading: state.list.loading
});

// Object as a second param of any action 
export default connect(mapStateToProps, { getTodos })(Todos);
