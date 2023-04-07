import mongoose, { mongo } from "mongoose";

const forumUserSchema = new mongoose.Schema({
    data:{
        type:String,
        required:true,
        min:2
    },
    profileId:{
        type:String,
        required:true
    }
});

const Forum_User = mongoose.model("Forum_User",forumUserSchema);
export default Forum_User;
