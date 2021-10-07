import mongoose from 'mongoose';

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
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("Todo", todo);

export default Todo;