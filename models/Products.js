import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  score:{
    type:Number,
    required:true,
  },
  producttype: {
    type: String,
    required: true,
  },
  sale: {
    type: Number,
    required: false,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Referencing the User model
  },
  label1: {
    type: String,
    required: true,
  },
  label2: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model("Product", ProductSchema);
