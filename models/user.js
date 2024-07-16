import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  shoppingFrequency: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
