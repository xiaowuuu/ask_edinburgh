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

    app.get('/', async(req, res)=> {
      try {
        const users = await userCollection.find().toArray();
        const dataTree = await Promise.all(
          users.map(async (user) => {
            const questions = await questionCollection.find({userId: user._id}).toArray();
            const answers = await answerCollection.find({userId: user._id}).toArray();

            return {
              user,
              questions,
              answers,
            }
          })
        );
          res.json(dataTree);
        } catch (error) {
          console.error('error fetching data:', error);
          res.status(500).json({status: 500, error: 'internal server error'})
        }
      })
  
  app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
  });
})
.catch(console.error);