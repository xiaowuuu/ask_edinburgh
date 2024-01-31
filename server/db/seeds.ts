import mongoose from "mongoose";
import seedData from "./seedData";
import User from "../models/User";
import Question from "../models/Question";
import Answer from "../models/Answer";

async function seedDataBase () {
  try {
    const connection = await mongoose.connect("mongodb://localhost:27017/ask_edinburgh");
    
    if (!connection.connections[0].readyState){
      console.log('mongodb connection error, please make sure mongodb is running');
      process.exit(1);
    }

    const users = await User.insertMany(seedData.users);

    // if (!users || users.length === 0) {
    //   console.error("users have no _id values");
    //   return;
    // }

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