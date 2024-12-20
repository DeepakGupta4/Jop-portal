import mongoose from "mongoose";


const connectToDb = async()=>{
    try {
       await mongoose.connect(process.env.DB_CONNECT);
       console.log("Connected to Db") 
    } catch (error) {
        console.log(error)
    }
}

export default connectToDb;