import mongoose from "mongoose";

const OrderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        require:true,
    },
    label1:{
        type:String,
        require:false,
        default:" ",
    },
    label2:{
        type:String,
        require:false,
        default:" ",
    },
  
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Referencing the User model
      },
  

    },{timestamps:true})
export default mongoose.model("Order",OrderSchema)