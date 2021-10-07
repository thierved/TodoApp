import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import mongoose from './models/db.js';
import todosRouter from './routes/todos.js';
import usersRouter from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/todos', todosRouter);
app.use('/users', usersRouter);


app.listen(8080, () => console.log("listening on port 3000!"));