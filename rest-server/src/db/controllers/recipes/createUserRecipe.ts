import db from '../../';
import { addTags } from '../../../search-worker/controllers';

const createUserRecipe = async (UserId, {
  name,
  fat,
  calories,
  protein,
  rating,
  sodium,
  directions,
  ingredients,
  imageURL,
  tags,
}) => {
  name = name.trim();
  const newRecipe = await db.Recipes.create({
    name,
    fat,
    calories,
    protein,
    rating,
    sodium,
    commentCount: 0,
  });
  const user = await db.Users.findOne({
    where: {
      id: UserId,
    },
  });
  const RecipeId = await newRecipe.get('id');
  await newRecipe.addUser(user);
  if (imageURL) {
    await db.ImagesRecipes.create({
      RecipeId,
      UserId,
      image_url: imageURL,
    })
  }
  await directions.forEach((dir, i) => {
    db.Directions.create({
      description: dir,
      dirOrder: i,
      RecipeId,
    });
  });
  await ingredients.forEach((name) => {
    db.Ingredients.create({
      name,
      RecipeId,
    });
  });
  await tags.forEach((name) => {
    db.Tags.findOrCreate({ where: { name } })
      .spread((tag) => {
        tag.addRecipe(newRecipe);
      });
  });
  if (!process.env.BUILD_APP) {
    addTags(tags, 'recipe', RecipeId, name, 0);
  }
  return newRecipe;
};

export default createUserRecipe;
