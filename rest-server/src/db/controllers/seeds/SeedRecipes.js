const data = require('../../seedData/full_format_recipes');
const createUserRecipe = require('../recipes/CreateRecipe');
const db = require('../../index');

for (let i = 0; i < 10; i++) {
  const recipe = {
    title: data[i].title,
    fat: data[i].fat,
    calories: data[i].calories,
    protein: data[i].protein,
    rating: data[i].rating,
    sodium: data[i].sodium,
    directions: data[i].directions,
    ingredients: data[i].ingredients,
    tags: data[i].categories,
  };
  const randUser = (1 + Math.floor(Math.random() * 5));
  db.Users.findOne({ where: { id: randUser } }).then((user) => {
    createUserRecipe(user, recipe);
  });
}
