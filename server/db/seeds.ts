import mongoose from "mongoose";
import seedData from "./seedData";
import User from "../models/User";
import Question from "../models/Question";
import Answer from "../models/Answer";

async function seedDataBase () {
  try {
    (await mongoose.connect("mongodb://localhost:27017/ask_edinburgh")).isObjectIdOrHexString(
      () => {},
    ).catch((err:Error)=>{
      console.log('mongodb connection error, please make sure mongodb is running' + err)
      process.exit();
    })

    const users = await User.insertMany(seedData.users);

    seedData.questions.forEach((q,index)=>(q.userId = users[index]._id));
    seedData.answers.forEach((a,index)=> (a.userId = users[index]._id));

    await Question.insertMany(seedData.questions);
    await Answer.insertMany(seedData.answers);

    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {

    mongoose.connection.close();

  }
}

seedDataBase();