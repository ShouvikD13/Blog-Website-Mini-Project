import express from "express"

const app = express()

app.use(express.json())

app.listen(3300,()=>{
    console.log("Connected!")
})