import db from '../../';

const createUserRecipe = async (user, {
  title,
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
    title,
    fat,
    calories,
    protein,
    rating,
    sodium,
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
};

export default createUserRecipe;
