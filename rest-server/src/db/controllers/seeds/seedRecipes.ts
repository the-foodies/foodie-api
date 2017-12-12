import { createUserRecipe } from '../recipes';
import db from '../../';

const data = require('../../seedData/full_format_recipes.json');

for (let i = 0; i < 10; i++) {
  const recipe = {
    name: data[i].title,
    fat: data[i].fat,
    calories: data[i].calories,
    protein: data[i].protein,
    rating: data[i].rating,
    sodium: data[i].sodium,
    directions: data[i].directions,
    ingredients: data[i].ingredients,
    tags: data[i].categories,
  };
  const randUser = (1 + Math.floor(Math.random() * 4));
  db.Users.findOne({ where: { id: randUser } }).then((user) => {
    createUserRecipe(user, recipe);
  });
}
