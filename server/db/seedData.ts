import { ObjectId } from "mongodb";
const userId = new ObjectId();
const questionId1 = new ObjectId();
const questionId2 = new ObjectId(); //insert the question 2

const seedData = {
  users: [
    {_id: userId, username: 'user', queries: []}
  ],
  questions: [
    {_id: questionId1, userId, questionText:"Is summer the best season of Edinburgh?", answer:[]},
    {_id: questionId2, userId, questionText:"What are some hidden gems or lesser-known places to visit in Edinburgh that you would recommend to someone visiting for the first time?", answer:[]},

  ],
  answers: [
    {userId, questionId:questionId1, answerText:"of course"},
    {userId, questionId:questionId2, answerText:"One lesser-known gem in Edinburgh is the Dean Village. Tucked away along the Water of Leith, this picturesque village offers a tranquil escape from the bustling city. Stroll along the riverside, admire the historic architecture, and discover a peaceful side of Edinburgh that many tourists might overlook."}
  ]
}

export default seedData;