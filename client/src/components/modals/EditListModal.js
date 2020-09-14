import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    deleteTodo,
    updateTodo,
    deleteProgress,
    updateProgress,
    deleteDone,
    updateDone
} from '../../store/actions/listActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const EditListModal = ({
    current,
    deleteTodo,
    updateTodo,
    deleteProgress,
    updateProgress,
    deleteDone,
    updateDone
}) => {

    const [description, setDescription] = useState('');

    useEffect(() => {
        // Initialize Materialize JS
        if (current) {
            setDescription(current.description);
        }
    }, [current]);

    const onSubmit = () => {
        // Validation
        if (description === "") {
            M.toast({ html: 'Please enter a description' });
        } else {
            const updateCard = {
                _id: current._id,
                description,
                type: current.type,
                startDate: new Date()
            }
            if (current.type === 'todo') {
                updateTodo(updateCard);
            } else if (current.type === 'progress') {
                updateProgress(updateCard);
            } else if (current.type === 'done') {
                updateDone(updateCard);
            }
            M.toast({ html: 'List has been updated' });
            // Clear Fields
            setDescription('');
        }
    };

    const onDelete = () => {
        if (current.type === 'todo') {
            deleteTodo(current._id); // Check for this id
        } else if (current.type === 'progress') {
            deleteProgress(current._id);
        } else if (current.type === 'done') {
            deleteDone(current._id);
        }
        M.toast({ html: 'Card Deleted' });
    };

    return (
        <div id="edit-list-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <div className="row">
                    <h6>Edit Description:</h6>
                    <div className="input-field">
                        <input
                            style={{ textIndent: '11px' }}
                            type="text"
                            name="description"
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>
                </div>

                {/* <div className="row">
                    <div className="input-field">
                        <select
                            name="member"
                            value={member}
                            className="browser-default"
                            onChange={e => setMember(e.target.value)}>
                            <option value="" disabled> Select Member </option>
                            <option value="Fraggy"> Fraggy </option>
                            <option value="Marco Guzman"> Marco Guzman </option>
                        </select>
                    </div>
                </div> */}

            </div>

            <div className="modal-footer">
                <a
                    href="#!"
                    onClick={onDelete}
                    className="btn-large modal-close red waves-effect waves-light"> DELETE
                </a>
                <a
                    href="#!"
                    onClick={onSubmit}
                    style={{ margin: '18px' }}
                    className="btn-large deep-purple accent-3 modal-close waves-effect waves-light"> SAVE CARD
                </a>

            </div>

        </div>
    );
}

const modalStyle = {
    width: '90%',
    height: '70%'
}

EditListModal.protoTypes = {
    current: PropTypes.object.isRequired,
    deleteList: PropTypes.func.isRequired,
    updateList: PropTypes.func.isRequired,
    deleteProgress: PropTypes.func.isRequired,
    updateProgress: PropTypes.func.isRequired,
    deleteDone: PropTypes.func.isRequired,
    updateDone: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    current: state.list.current,
});

export default connect(mapStateToProps, {
    deleteTodo,
    updateTodo,
    deleteProgress,
    updateProgress,
    deleteDone,
    updateDone
})(EditListModal);
