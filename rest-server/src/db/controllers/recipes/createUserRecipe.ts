import db from '../../';

const createUserRecipe = async (user, {
  name,
  fat,
  calories,
  protein,
  rating,
  sodium,
  directions,
  ingredients,
  tags,
}) => {
  const newRecipe = await db.Recipes.create({
    name,
    fat,
    calories,
    protein,
    rating,
    sodium,
    commentCount: 0,
  });
  await newRecipe.addUser(user);
  const id = await newRecipe.get('id');
  await directions.forEach((dir, i) => {
    db.Directions.create({
      description: dir,
      dirOrder: i,
      RecipeId: id,
    });
  });
  await ingredients.forEach((name) => {
    db.Ingredients.create({
      name,
      RecipeId: id,
    });
  });
  await tags.forEach((name) => {
    db.Tags.findOrCreate({ where: { name } })
      .spread((tag) => {
        tag.addRecipe(newRecipe);
      });
  });
  return newRecipe;
};

export default createUserRecipe;
