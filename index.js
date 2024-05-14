const express=require("express")
const app=express()
const RecipeRouter=require("./routes/recipe-router")
const PORT=3001
app.use(express.json())
app.use("/",RecipeRouter)
app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})