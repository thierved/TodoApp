const mongoose = require('mongoose');

const todo = mongoose.Schema({
    text: {
        type: String,
        minlength: 3,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("Todo", todo);

module.exports = { Todo };