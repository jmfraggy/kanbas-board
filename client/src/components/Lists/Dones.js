import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDones } from '../../store/actions/listActions';

import Card from './Card';
import Loader from '../layout/Loader';

const Dones = ({ dones: { done, loading}, getDones }) => {

    useEffect(() => {
        getDones();
        // eslint-disable-next-line
    }, [])

    if(loading ||done === null) {
        return <Loader />;
    }

    return (
        <ul className="">
            <li className="">
                <h4 className="center">Done</h4>
            </li>
            {!loading && done.length === 0 ? (<p className="center">Empty</p>) : (
                done.map(el => <Card key={el._id} el={el} />)
            )}
        </ul>
    )
}

Dones.propTypes = {
    dones: PropTypes.object.isRequired,
    getDones: PropTypes.func.isRequired
};

// First param of the arr is the prop, second is the param of the index reducer
const mapStateToProps = state => ({
    dones: state.list,
});

// Object as a second param of any action 
export default connect(mapStateToProps, {getDones})(Dones);
