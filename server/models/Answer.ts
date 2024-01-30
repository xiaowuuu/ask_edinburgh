import mongoose, {Document, Schema} from "mongoose";

interface IAnswer extends Document {
  userId: mongoose.Types.ObjectId;
  questionId: mongoose.Types.ObjectId;
  answerText: string;
}

const answerSchema = new Schema<IAnswer>({
  userId: {type: Schema.Types.ObjectId, red: "User", required: true},
  questionId: {type:Schema.Types.ObjectId, red: "Question", required: true},
  answerText: {type: String, required: true},
})

const Answer = mongoose.model<IAnswer>("Answer", answerSchema);

export default Answer;