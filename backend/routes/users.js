import express from "express"
import {
    getUser,
    createSpace
} from "../Controllers/users.js"

const router = express.Router()

router.get("/:id",getUser);
router.post("/:id/createSpace",createSpace)

export default router