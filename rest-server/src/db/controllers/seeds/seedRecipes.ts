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
    imageURL: 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
    tags: data[i].categories,
  };
  const randUser = (1 + Math.floor(Math.random() * 5));
  db.Users.findOne({ where: { id: randUser } }).then((user) => {
    createUserRecipe(user, recipe);
  });
}
