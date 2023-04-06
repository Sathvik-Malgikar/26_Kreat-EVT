import mongoose from "mongoose";

// const spacesSchema = new mongoose.Schema({
//     mySpace:{
//         type:Array,
//         default:[],
//     },
//     groupSpace:{
//         type:Object,
//         default:{},
//     }
// });

// const Spaces = mongoose.model("Spaces",spacesSchema);

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    password:{
        type:String,
        required:true,
        min:2,
        max:50
    },
    email:{
        type:String,
        unique:true,
        max:40,
        required:true
    },
    spaces:{
        type:Object,
        default:{}
    }
})

const User = mongoose.model("User",UserSchema)
export default User;