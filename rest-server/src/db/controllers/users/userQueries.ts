import db from '../../';

const getUserByEmail = async (email) => {
  const user = await db.Users.findOne({
    where: {
      email,
    },
  }, {
    raw: true,
  });
  return user;
};
const getUserById = async (id) => {
  const user = await db.Users.findOne({
    where: {
      id,
    },
  });
  return user;
};
const getUserPosts = async (userId) => {
  const recipes = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.Recipes,
      include: [
        { model: db.Ingredients },
        { model: db.Directions },
        { model: db.ImagesRecipes },
        { model: db.Tags },
        { model: db.Comments,
          include: [{
            model: db.Users
          }],
          where: {
            posterId: userId,
          },
        },
      ],
    }],
  });
  const restaurants = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.FoodItems,
      include: [{
        model: db.Restaurants,
        include: [
          { model: db.ImagesRestaurants },
          { model: db.Tags },
          { model: db.Comments,
            include: [{
              model: db.Users
            }],
            where: {
              posterId: userId,
            },
          },
        ],
      }],
    }]
  })
  let posts = [];
  console.log(recipes, restaurants);
  await recipes.Recipes.forEach(recipe => {
    posts.push(recipe);
  });
  await restaurants.FoodItems.forEach(restaurant => {
    posts.push(restaurant);
  });
  return posts;
}

export {
  getUserByEmail,
  getUserById,
  getUserPosts,
};
