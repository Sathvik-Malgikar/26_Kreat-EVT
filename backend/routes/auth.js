import express from "express";
import {login,logincheck} from "../Controllers/auth.js"
import {register} from "../Controllers/auth.js"

const router = express.Router()

router.post("/register",register)

router.post("/login",login)
router.post("/logincheck",logincheck)

export default router