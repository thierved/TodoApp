import Todo from '../models/todo.js';

export const getTodos = async (req, res) => {
    const todos = await Todo.find();
    try {
        res.status(200).json(todos);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const postTodo = async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}