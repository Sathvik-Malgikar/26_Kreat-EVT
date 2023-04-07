import express from "express"
import {
    getUser,
    createSpace
} from "../Controllers/users.js"

const router = express.Router()

router.get("/:id",getUser);
router.post("/:id/createSpaceSingle",createSpaceSingle)
router.post("/:id/createSpaceMulti",createSpaceMulti);

export default router