import express, { Express } from 'express';
import cors from 'cors';
import {MongoClient} from 'mongodb';
import createRouter from './helpers/create_router';

const app: Express = express();
const port: number = 9000;

app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017')
  .then((client)=> {
    const db = client.db('ask_edinburgh');
    const userCollection = db.collection('user');
    const userRouter = createRouter(userCollection);
    app.use('/api/user', userRouter);
  })
  .catch(console.error);

app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});