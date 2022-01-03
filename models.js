import mongoose from 'mongoose'

var Schema = mongoose.Schema;

var TimeTableSchema = new Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    tt: [
       {
           type: Array
       }
    ],
	
}, {timestamps: true})

const TimeTable = new mongoose.model("TimeTable", TimeTableSchema)
export default TimeTable;