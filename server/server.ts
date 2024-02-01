import express, { Express } from 'express';
import cors from 'cors';
import {MongoClient} from 'mongodb';
import createRouter from './helpers/create_router';

const app: Express = express();
const port: number = 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017')
  .then((client)=> {
    const db = client.db('ask_edinburgh');
    const userCollection = db.collection('users');
    const questionCollection = db.collection('questions');
    const answerCollection = db.collection('answers');
    const userRouter = createRouter(userCollection);
    const questionRouter = createRouter(questionCollection);
    const answerRouter = createRouter(answerCollection);
    app.use('/user', userRouter);
    app.use('/question', questionRouter);
    app.use('/answer', answerRouter);
  })
  .catch(console.error);

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});