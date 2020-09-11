import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos } from '../actions/listActions';

import Card from './Card';
import Loader from './layout/Loader';

const Todos = ({ todos: { todo, loading}, getTodos }) => {

    useEffect(() => {
        getTodos();
        // eslint-disable-next-line
    }, [])

    if(loading || todo === null) {
        return <Loader />;
    }

    return (
        <ul className="">
            <li className="">
                <h4 className="center">To Do</h4>
            </li>
            {!loading && todo.length === 0 ? (<p className="center">Empty</p>) : (
                todo.map(el => <Card key={el.id} el={el} />)
            )}
        </ul>
    )
}

Todos.propTypes = {
    todos: PropTypes.object.isRequired,
    getTodos: PropTypes.func.isRequired
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    todos: state.list,
});

// Object as a second param of any action 
export default connect(mapStateToProps, { getTodos })(Todos);
