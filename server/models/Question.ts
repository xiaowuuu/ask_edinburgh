import mongoose, {Document, Schema} from "mongoose";

interface IQuestion extends Document {
  userId: mongoose.Types.ObjectId;
  questionText: string;
}

const QuestionSchema = new Schema<IQuestion>({
  userId: {type:Schema.Types.ObjectId, ref: "User", required: true},
  questionText: { type: String, required: true},
})

const Question = mongoose.model<IQuestion>("Question", QuestionSchema)

export default Question;