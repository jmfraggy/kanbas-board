import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrent } from '../actions/listActions';

import Moment from 'react-moment';

const Card = ({ el, setCurrent }) => {
    const { description, startDate, member } = el;

    return (
            <div className="card" >
                <div className="card-image waves-effect waves-block waves-light">
                </div>
                <div className="card-content">
                <a 
                    href="#edit-list-modal" 
                    className="modal-trigger"
                    onClick={() => setCurrent( el )}>
                    <i className="material-icons right" style={{ margin: '-26px'}}>more_horiz</i>
                </a>
                    <span className="card-title grey-text text-darken-4">{description}</span>
                    <br />
                    <p><b>{'Member: '} </b> {member}</p>
                    <br />
                        <p><b>{'Date:  '} </b> 
                        <Moment format="DD/MMM/YY - h:mm">
                                {startDate}
                        </Moment>
                        </p>
                </div>
            </div>
    )
};

Card.protoTypes = {
    todo: PropTypes.object.isRequired,
    setCurrent: PropTypes.func.isRequired
};



export default connect(null, { setCurrent })(Card);
