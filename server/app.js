const express = require('express');
const mongoose = require('./models/db');

const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

app.use(express.json());

app.get('/todos', (req, res) => {
    Todo.find()
        .then(todo => res.send(todo))
        .catch(err => res.status(400).send(err));
});

app.post('/users', (req, res) => {
    const user = new User({
        name: req.body.name
    });

    user.save()
        .then(user => res.send(user))
        .catch(err => res.send(err))
});

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save()
        .then(todo => res.send(todo))
        .catch(err => res.send(err))
});

app.listen(3000, () => console.log("listening on port 3000!"));