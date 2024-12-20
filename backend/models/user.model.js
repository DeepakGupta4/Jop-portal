import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:['student','recuriter'],
        required: true
    },
    profile: {
        bio:{ type: String },
        skills: [{ type: String }],
        resumeOriginalName:{type:String},
        company:{type:mongoose.Schema.Types.ObjectId,ref:'company'},
        profilephoto: {
            type: String,
            default:""
        },
    }
},
{timeseries: true} 
)

export const User = mongoose.model('User',userSchema)