import mongoose, {Document, Schema} from 'mongoose';

interface IQuery {
  questionId: mongoose.Types.ObjectId;
  answer: string[];
}

interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
  queries: IQuery[];
}
const querySchema = new Schema<IQuery>({
  questionId: {type:Schema.Types.ObjectId, required: true},
  answer:[{type: String}],
})
const userSchema = new Schema<IUser> ({
  username: {type: String, required: true},
  queries: [querySchema],
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;