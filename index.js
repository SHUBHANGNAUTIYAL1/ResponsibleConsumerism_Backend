import express from "express"
import dotenv from"dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"

import ProductRoute from "./routes/product.js"
import OrderRoute from "./routes/order.js"
import QuestionRoute from "./routes/Questionnaire.js"
import logRoute from "./routes/log.js"
import adminRoute from "./routes/admin.js"
import cors from 'cors';

const app=express()
dotenv.config()

const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
    }catch(error){
        throw error;
    }

    };
    mongoose.connection.on("disconnected",()=>{
        console.log("Mongodb disconnected")
    })
    
    app.use(cors());

    app.use(express.json())
    app.use("/api/auth",authRoute);
    
    app.use('/api/product',ProductRoute);
    app.use('/api/order',OrderRoute);
    app.use('/api/questionnaire',QuestionRoute);
    app.use('/api/logs',logRoute);
    app.use('/api/admin',adminRoute);

app.listen(8100,()=>{
    connect();
    console.log("connected")

})
