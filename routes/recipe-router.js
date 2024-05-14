const express=require("express")
const RecipeRouter=express.Router()
const RecipeController=require("../controllers/Recipe-Controller")

RecipeRouter.get("/",RecipeController.getRecipe)
RecipeRouter.put("/:id",RecipeController.updateRecipe)
RecipeRouter.delete("/:id",RecipeController.deleteRecipe)
RecipeRouter.post("/:id",RecipeController.addRecipe)

module.exports=RecipeRouter