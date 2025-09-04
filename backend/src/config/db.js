import mongoose from "mongoose";
import {ENV} from "./env.js";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(ENV.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
        process.exit(1);  // status code 1 indicates failure, 0 indicates success
    }
}