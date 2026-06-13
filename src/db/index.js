import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB=async()=>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected: ${connectionInstance.connection.host} \n`);
    }catch(error){
        console.log("MONGODB CONNECTION ERROR: ",error);
        process.exit(1);


        // Stops the Node.js application immediately.
        // 1 means:
        // Program exited because of an error
        // while:
        // process.exit(0);
        // means:
        // Program ended successfully
    }
}

export default connectDB;