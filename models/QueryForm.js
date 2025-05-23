import mongoose,{Schema} from "mongoose";


const QuerySchema = new Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Phone:{
        type:Number,
        required:true,
        unique:true
    },
    Message:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const Query = mongoose.model('Query',QuerySchema)
export default Query