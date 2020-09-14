const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    description: {
        type: String,
        required: true
    },
    member: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'member'
    },
    type: {
        type: String,
        default: 'todo'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('todo', TodoSchema);