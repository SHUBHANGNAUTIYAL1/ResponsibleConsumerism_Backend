import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({

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

}, { timestamps: true });

export default mongoose.model("User", UserSchema);
