const router = require("express").Router();
const res = require("express/lib/response");
const RecipeService = require("../services/recipe.service");

router.get("/", async (req, res) => {
  const recipes = await RecipeService.getAllRecipes();
  res.json(recipes);
});

module.exports = RecipeController = router;
