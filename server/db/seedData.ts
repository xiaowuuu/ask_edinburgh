import { ObjectId } from "mongodb";
const userId = new ObjectId();
const questionId = new ObjectId();

const seedData = {
  users: [
    {_id: userId, username: 'user'}
  ],
  questions: [
    {_id: questionId, userId, questionText:"Is summer the best season of Edinburgh?"},
    {_id: questionId, userId, questionText:"What are some hidden gems or lesser-known places to visit in Edinburgh that you would recommend to someone visiting for the first time?"},

  ],
  answers: [
    {userId, questionId, answerText:"of course"},
    {userId, questionId, answerText:"One lesser-known gem in Edinburgh is the Dean Village. Tucked away along the Water of Leith, this picturesque village offers a tranquil escape from the bustling city. Stroll along the riverside, admire the historic architecture, and discover a peaceful side of Edinburgh that many tourists might overlook."}
  ]
}

export default seedData;