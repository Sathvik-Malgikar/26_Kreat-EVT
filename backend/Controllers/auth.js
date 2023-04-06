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

export const login = async (req,res) => {
    try{
        const {username,password} = req.body
        const inUser = await User.findOne({username:username});
        if (!inUser) {
            return res.status(400).json({error:"Invalid username or password"});
        }
        else{
            if (password != inUser.password){
                return res.status(400).json({error:"Invalid username or password"})
            }
            else{
                // const token = jwt.sign({id:inUser._id},process.env.SECRET)
                inUser.password = ""
                // delete inUser.password
                // console.log(inUser)
                return res.status(200).json(inUser)
            }
        }

    }catch(err){
        res.status(400).json({error:err.message})
    }
}


export const logincheck = async (req,res) => {
    try{
        const {username} = req.body
        console.log(req.body)
        const inUser = await User.findOne({username:username});
        // console.log(inUser)
        if (!inUser) {
            return res.status(404).json({error:"Invalid username or password"});
        }
        else{
            return res.status(200).json(inUser)
        }

    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export const getLogin = async (req,res) => {
    const user = User.findOne({username:"hi"})
    return res.status(200).json(user);
}