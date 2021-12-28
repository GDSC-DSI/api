import {mongoose} from "mongoose"

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
	
}, {timestamps: true});

export default  mongoose.model("timetable", TimeTableSchema)