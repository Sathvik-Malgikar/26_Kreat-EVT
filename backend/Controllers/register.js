import jwt from "jsonwebtoken"
import User from "../models/User.js"

// Register user

export const register = async (req,res) => {
    try{
        const {
            username,
            password,
            email
        } = req.body

        const newUser = new User({
            username,
            password,
            email
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    }
    catch (err){
        res.status(500).json({error:err.message})
    }
}