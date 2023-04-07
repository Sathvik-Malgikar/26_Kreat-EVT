import User from "../models/User.js"

export const getUser = async (req,res) => {
    try{
        const {id } = req.params;
        const user = await User.findOne({_id:id})
        res.status(200).json(user)
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}

export const createSpaceSingle = async (req,res) => {
    try{
        const {id} = req.params;
        const user = User.findById(id)  
    }
    catch (err) {
        res.status(400).json({error:err.message})
    }
}