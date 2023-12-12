import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async ()=> {
    try{
        const connectionInstance = await mongoose.connect("mongodb+srv://shashantkashyap999:Shashant123@sdatabase.9vxnehi.mongodb.net")
        console.log(`\n mongoDB connected !! DB host: ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("mongoDb connection error", error)
        process.exit(1)
    }
}

export default connectDB