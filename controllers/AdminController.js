import Admin from "../models/admin.js"
import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
export const register1=async (req,res,next)=>{
    try {
        const salt=bcrypt.genSaltSync(10);
        const hash=bcrypt.hashSync(req.body.password,salt);
        const newAdmin=new Admin({
            name:req.body.name,
            password:hash,
        })
        await newAdmin.save()
        return res.status(200).json({message:"user has been created",newAdmin})
    } catch (err) {
        next(err)
        
    }
};

export const login1= async (req,res,next)=>{
    try {
        const admin=await Admin.findOne({name: req.body.name})
        if(!admin) return next(createError(404,"user not found!"))
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            admin.password
          );
        if (!isPasswordCorrect)
        {
            return next(createError(400, "Wrong password or username!"));}
        const token=jwt.sign({id:admin._id},process.env.JWT);
        
        const { password, ...otherDetails} =admin._doc;
        res.cookie("access_token",token,{
        httpOnly:true,
        })
        .status(200).json({...otherDetails});
    } catch (err) {
        next(err);
        
    }
   
    };