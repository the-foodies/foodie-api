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
  const RecipeId = await newRecipe.get('id');
  const UserId = await user.get('id');  
  await newRecipe.addUser(UserId);
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
  return newRecipe;
};

export default createUserRecipe;
