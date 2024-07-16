import User from "../models/user.js"
import bcrypt from "bcryptjs";
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken";



export const register = async (req, res, next) => {
    try {
      const newUser = new User({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex,
        occupation: req.body.occupation,
        shoppingFrequency: req.body.shoppingFrequency,
        role: req.body.role,
      });
  
      await newUser.save();
      return res.status(200).json({ message: "User has been created", newUser });
    } catch (err) {
      next(err);
    }
  };

  export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ name: req.body.name });
      console.log(req.body.name);
      if (!user) return next(createError(404, "User not found!"));
  
      if (req.body.age.toString() !== user.age.toString()) {
        return next(createError(400, "Wrong age or username!"));
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT);
  
      const { age, ...otherDetails } = user._doc;
      res.cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200).json({ ...otherDetails });
    } catch (err) {
      next(err);
    }
  };
    export const AllUser=async (req,res,next)=>{
        try {
            //const type = req.params.type; // Assuming the user ID is provided as a URL parameter
            console.log("hi")
            const user= await User.find();
            
            return res.status(200).json({user});
        } catch (err) {
            next(err)
            
        }
    } 
