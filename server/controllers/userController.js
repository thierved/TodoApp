import User from '../models/user.js';

export const getUsers = async (req, res) => {
    const users = await User.find();
    try {
        res.status(200).json(users);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}

export const postUser = async (req, res) => {
    try {
        const newUser = await new User(req.body).save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({message: err.message});
    }
}