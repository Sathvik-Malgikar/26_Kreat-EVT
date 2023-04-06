import express from "express";
import {login,logincheck,register,getLogin} from "../Controllers/auth.js"

const router = express.Router()

router.post("/register",register)

router.post("/login",login)
router.post("/logincheck",logincheck)
router.get("/logincheck",()=>{
    console.log("Hi")
})

export default router