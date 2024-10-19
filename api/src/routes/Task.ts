import { Schema, model } from "mongoose";
import { title } from "process";

const taskSchema = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:false,
        trim:true
    }
},
{
    versionkey:false,
    timestamps:true
}
)

export default model('Task', taskSchema)