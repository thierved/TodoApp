import express from 'express';

import {getTodos, postTodo} from '../controllers/todoController.js'

const router = express.Router();

router.get("/", getTodos);
router.post("/", postTodo);

export default router;