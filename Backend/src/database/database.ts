import mongoose from "mongoose";
import { config } from "../config/app.config.ts";

const connectDatabase = async () => {
    try{
        await mongoose.connect(config.MONGO_URI);
        console.log("Database connected successfully");
    }catch(error){
        console.log("Error Connecting to Database");
        process.exit(1);
    }
}

export default connectDatabase;