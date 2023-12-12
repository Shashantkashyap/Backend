
import dotenv from "dotenv";
import { app } from "./app.js";

import connectDB from "./db/index.js";

const Port = process.env.PORT || 8000;

console.log(process.env.PORT);

dotenv.config({
    path: './env'
})


connectDB()
.then(()=>{
    app.on('error', (error)=>{
        console.log("ERROR", error);
        throw error
    })
    app.listen(Port,()=>{
        console.log(`server is running at port: ${Port}`)
    })
})
.catch((err)=>{
    console.log("Mongo db connection failed", err)
})



/*
import express  from "express";
const app = express()
( async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on the port no. ${process.env.PORT}`)
        })
    }catch(err){
        console.log(err)
        throw err
    }
})();

*/