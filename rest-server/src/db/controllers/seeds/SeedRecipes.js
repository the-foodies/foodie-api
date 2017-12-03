const data = require('../../seedData/full_format_recipes');
const addRecipeToUser = require('../recipes/CreateRecipe');

for (let i = 0; i < 10; i++) {
  const recipe = {
    title: data[i].title,
    fat: data[i].fat,
    calories: data[i].calories,
    protein: data[i].protein,
    rating: data[i].rating,
    sodium: data[i].sodium,
  };
  const randUser = (1 + Math.floor(Math.random() * 5));
  addRecipeToUser(recipe, randUser);
}
