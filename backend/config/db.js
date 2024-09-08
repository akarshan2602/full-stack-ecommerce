import mongoose from "mongoose";

const connectDB = async () => {
    try{
        
        mongoose.connect(process.env.MONGO_URI)
        console.log("Successfully connected to mongoDB ✅")

    }catch(error){
        console.error('ERROR : ${error.message}')
        process.exit(1)
    }
}

export default connectDB;