const RecipeRepository = require("../repository/recipe.repository");

module.exports = RecipeService = {
  getAllRecipes: async () => await RecipeRepository.getAllRecipes(),
};
