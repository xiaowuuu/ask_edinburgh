import mongoose, {Document, Schema} from 'mongoose';

interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  username: string;
}

const userSchema = new Schema<IUser> ({
  username: {type: String, required: true},
})

const User = mongoose.model<IUser>("User", userSchema);

export default User;