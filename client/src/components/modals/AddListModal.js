import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo, addProgress, addDone } from '../../actions/listActions';

import M from 'materialize-css/dist/js/materialize.min.js';

const AddListModal = ({ addTodo, addProgress, addDone }) => {

    const [description, setDescription] = useState('');
    const [member, setMember] = useState('');
    const [type, setType] = useState('');

    const onSubmit = () => {
        // Validation
        if (description === "") {
            M.toast({ html: 'Please enter a description' });
        } else if (member === "") {
            M.toast({ html: 'Please enter a member' });
        } else {
            const newList = {
                description,
                startDate: new Date(),
                member,
                type
            };
            if(type === 'todo') {
                addTodo(newList);
            } else if(type === 'progress') {
                addProgress(newList);
            } else if(type === 'done') {
                addDone(newList);
            }

            // Alert
            M.toast({ html: `Log added to ${type}` })

            // Clear Fields
            setDescription('');
            setMember('');
        }
    };

    return (
        <div id="add-list-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <div className="card-tabs">
                    <ul className="tabs tabs-fixed-width">
                        <li className="tab"><a onClick={() => setType('todo')} href="#todo">To Do</a></li>
                        <li className="tab"><a onClick={() => setType('progress')} href="#progress">In Progress</a></li>
                        <li className="tab"><a onClick={() => setType('done')} href="#done">Done</a></li>
                    </ul>
                </div>
                <br />
                <div className="row">
                    <h6>Enter a Description:</h6>
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

                <div className="row">
                    <div className="input-field">
                        <select
                            name="member"
                            value={member}
                            className="browser-default"
                            onChange={e => setMember(e.target.value)}>
                            <option value="" disabled> Select Member </option>
                            <option value="Jose Fragoso"> José Fragoso </option>
                            <option value="Marco Guzman"> Marco Guzmán </option>
                            <option value="Karen Gonzalez"> Karen Gonzalez </option>
                        </select>
                    </div>
                </div>

            </div>

            <div className="modal-footer">
                <div className="row">
                    <div className="input-field">
                        <a
                            href="#!"
                            onClick={onSubmit}
                            style={{ margin: '18px' }}
                            className="btn-large waves-effect waves-light deep-purple accent-3 modal-close"> ADD CARD
                    </a>
                    </div>
                </div>

            </div>

        </div>
    );
}

AddListModal.propTypes = {
    addTodo: PropTypes.func.isRequired,
    addProgress: PropTypes.func.isRequired,
    addDone: PropTypes.func.isRequired
};


const modalStyle = {
    width: '90%',
    height: '70%'
}

// null when you don't need mapState
export default connect(null, { addTodo, addProgress, addDone })(AddListModal);
