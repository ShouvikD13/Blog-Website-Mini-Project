import express from "express"
import postRoutes from "./routes/blogposts.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)

app.listen(3000,()=>{
    console.log("Connected!")
})