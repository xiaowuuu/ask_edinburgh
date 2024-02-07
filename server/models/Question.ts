import mongoose, {Document, Schema} from "mongoose";

interface IAnswer {
  // userId: mongoose.Types.ObjectId;
  answerId: mongoose.Types.ObjectId;
  answerText: string;
}
interface IQuestion extends Document {
  userId: mongoose.Types.ObjectId;
  questionText: string;
  answers: IAnswer[];
}

const AnswerSchema = new Schema<IAnswer>({
  // userId: { type: Schema.Types.ObjectId, ref: "User", required: true},
  answerId: {type: Schema.Types.ObjectId, required: true},
  answerText: {type:String, required: true},
})
const QuestionSchema = new Schema<IQuestion>({
  userId: {type:Schema.Types.ObjectId, ref: "User", required: true},
  questionText: { type: String, required: true},
  answers: [AnswerSchema],
})

const Question = mongoose.model<IQuestion>("Question", QuestionSchema)

export default Question;