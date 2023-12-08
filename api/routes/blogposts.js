import express from "express"
import { addPost } from "../contollers/blogposts.js"

const router = express.Router()

router.get("/", addPost)

export default router