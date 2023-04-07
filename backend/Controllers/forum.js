import Forum from "../models/Forum"
import Forum_User from "../models/Forum_User"

export const forumInsert = async (req,res) => {
    try{
        const {id,comment} = req.params
        const newUser = new Forum_User({
            data:comment,
            
        });

    }catch(err){
        res.status(400).json({error:err.message});
    }
}