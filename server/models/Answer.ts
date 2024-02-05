import mongoose, {Document, Schema} from "mongoose";

interface IAnswer extends Document {
  userId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  answerText: string;
}

const AnswerSchema = new Schema<IAnswer>({
  userId: {type: Schema.Types.ObjectId, ref: "User", required: true},
  questionId: {type:Schema.Types.ObjectId, ref: "Question", required: true},
  answerText: {type: String, required: true},
})

const Answer = mongoose.model<IAnswer>("Answer", AnswerSchema);

export default Answer;