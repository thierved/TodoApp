const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/TodoApp");

const todo = mongoose.Schema({
    text: {
        type: String,
        minlength: 3,
        required: true
    },
    completed: Boolean,
    completedAt: {
        type: Date,
        default: Date.now
    }
});

const Todo = mongoose.model("Todo", todo);

const newTodo = new Todo({
    text: "Water the garden",
    completed: true
});

newTodo.save()
    .then(doc => console.log(doc))
    .catch(err => console.log(err));