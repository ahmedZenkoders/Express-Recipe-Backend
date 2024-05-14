const data = require("../recipe.json")

const getRecipe = (req, res) => {
    try {
        res.status(200).json({ data: data })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}


const updateRecipe = (req, res) => {
    try {
        const recipeId = parseInt(req.params.id)
        console.log(recipeId)
        let found = data.find(function (recipe) {
            return recipe.id === recipeId
        })
        if (found) {
            let updatedData = {
                id: found.id,
                name: req.body.name,
                ingredients: req.body.ingredients

            }
            let targetIndex = data.indexOf(found)
            data.splice(targetIndex, 1, updatedData)
            res.status(201).json({ message: "Data updated successfully" })
        }
        else {
            res.status(404).json({
                "message": "unable to insert"
            })
        }

    } catch (error) {
        res.status(400).json({ message: error })
    }
}

const addRecipe = (req, res) => {
    let recipe = data.map((item) => item.id);
    let newId = recipe.length > 0 ? Math.max.apply(Math, recipe) + 1 : 1;

    let newRecipe = {
        id: newId,
        ingredients: req.body.ingredients,
        name: req.body.name
    };
    data.push(newRecipe);
    res.status(200).json({ message: "Recipe added successfully" })
}
const deleteRecipe = (req, res) => {
    try {
        const recipeId = parseInt(req.params.id)
        console.log(recipeId)
        let found = data.find(function (recipe) {
            return recipe.id === recipeId
        })
        if (found) {
            let targetIndex = data.indexOf(found)
            data.splice(targetIndex, 1)
            res.status(201).json({ message: "Data deleted successfully" })
        }
        else {
            res.status(404).json({
                "message": "unable to delete"
            })
        }

    } catch (error) {
        res.status(400).json({ message: error })
    }
}
module.exports = { getRecipe, updateRecipe, addRecipe, deleteRecipe }