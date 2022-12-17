const Recipe = require("../models/recipe");

module.exports = RecipeRepository = {
  getAllRecipes: async () => {
    const recipes = await Recipe.find();
    return recipes;
  },
};
