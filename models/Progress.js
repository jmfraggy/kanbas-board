const mongoose = require('mongoose');

const ProgressSchema = mongoose.Schema({  
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
        ref: 'members'
    },
    type: {
        type: String,
        default: 'progress'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('progress', ProgressSchema);