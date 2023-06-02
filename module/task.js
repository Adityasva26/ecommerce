import mongoose, { models ,Schema, model} from "mongoose";

const taskSchema = new Schema({
    task:{type:String , required:true}
})

const Task =  models.Task|| model("Task",taskSchema)

export default Task;