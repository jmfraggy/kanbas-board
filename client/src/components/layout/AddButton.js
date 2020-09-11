import React from 'react'

const AddButton = () => {
    return (
        <div className="fixed-action-btn">
            <a 
                href="#add-list-modal" 
                className="btn-floating btn-large deep-purple accent-3 tooltipped modal-trigger"
                data-position="left" 
                data-tooltip="Add a card" >
                    <i className="large material-icons">add</i>
            </a>
        </div>
    )
}

export default AddButton
