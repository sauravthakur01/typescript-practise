import express from 'express' ;
import todoRouter from './routes/todos'
import bodyParser from 'body-parser';

const app =express();

app.use(bodyParser.json())

app.use(todoRouter);
app.listen(5000);