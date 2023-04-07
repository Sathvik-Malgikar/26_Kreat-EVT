import express from "express"
import forumInsert from "../Controllers/forum.js"

const router = express.Router();

router.get("/:id",forumInsert)