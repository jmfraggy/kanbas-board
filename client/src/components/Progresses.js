import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProgresses } from '../actions/listActions';

import Card from './Card';
import Loader from './layout/Loader';

const Progresses = ({ progresses: { progress, loading}, getProgresses }) => {

    useEffect(() => {
        getProgresses();
        // eslint-disable-next-line
    }, [])

    if(loading || progress === null) {
        return <Loader />;
    }

    return (
        <ul className="">
            <li className="">
                <h4 className="center">In Progress</h4>
            </li>
            {!loading && progress.length === 0 ? (<p className="center">Empty</p>) : (
                progress.map(el => <Card key={el.id} el={el} />)
            )}
        </ul>
    )
}

Progresses.propTypes = {
    progresses: PropTypes.object.isRequired,
    getProgresses: PropTypes.func.isRequired
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    progresses: state.list,
});

// Object as a second param of any action 
export default connect(mapStateToProps, {getProgresses})(Progresses);
