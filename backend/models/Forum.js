import mongoose from "mongoose";
import Forum_User from "./Forum_User";

const forumSchema = new mongoose.Schema({
    data:{
        type:Array,
        default:[]
    },
});

const Forum = mongoose.model("Form",forumSchema);
export default Forum;