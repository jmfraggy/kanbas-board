const mongoose = require('mongoose');

const DoneSchema = mongoose.Schema({  
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
        default: 'done'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('done', DoneSchema);