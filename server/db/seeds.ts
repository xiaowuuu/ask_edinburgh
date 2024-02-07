import mongoose from "mongoose";
import seedData from "./seedData";
import User from "../models/User";
import Question from "../models/Question";
import Answer from "../models/Answer";

async function seedDataBase() {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/ask_edinburgh");

    if (!connection.connections[0].readyState) {
      console.log('mongodb connection error, please make sure mongodb is running');
      process.exit(1);
    }

    const users = await User.insertMany(seedData.users);

    const userId = users[0]._id;
    const questionsWithUserId = seedData.questions.map(question => ({
      ...question,
      userId
    }));

    const questions = await Question.insertMany(questionsWithUserId);
    const questionIds = questions.map(question => question._id);
    const answersWithUserIdAndQuestionId = seedData.questions.map((question, index) => ({
      ...question.answers[0],
      userId,
      questionId: questionIds[index]
    }));

    await Answer.insertMany(answersWithUserIdAndQuestionId);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedDataBase();
