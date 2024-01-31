import { ObjectId } from "mongodb";
const seedData = {
  users: [
    {username: 'user'}
  ],
  questions: [
    {userId: new ObjectId(), questionText:"Is summer the best season of Edinburgh?"}
  ],
  answers: [
    {userId: new ObjectId(), questionId: new ObjectId(), answerText:"of course"}
  ]
}

export default seedData;