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
const getUserByDisplayName = async (displayName) => {
  const user = await db.Users.findOne({
    where: {
      displayName,
    },
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
  console.log(userId);
  const recipes = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.Recipes,
      include: [
        { model: db.Directions },
        { model: db.Ingredients },
        { model: db.ImagesRecipes },
        { model: db.Tags },
        {
          model: db.Comments,
          where: {
            posterId: userId,
          },
          include: [{
            model: db.Users
          }],
          required: false,
        }
      ]
    }],
  });
  const restaurants = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.Restaurants,
      include: [
        { model: db.ImagesRestaurants },
        { model: db.Tags },
        {
          model: db.FoodItems,
          where: {
            UserId: userId,
          }
        },
        {
          model: db.Comments,
          where: {
            posterId: userId,
          },
          include: [{
            model: db.Users
          }],
          required: false,
        },
      ],
    }],
  });
  let posts = [];
  await recipes.Recipes.forEach(recipe => {
    posts.push(recipe);
  });
  await restaurants.Restaurants.forEach(restaurant => {
    posts.push(restaurant);
  });
  return posts;
}

export {
  getUserByEmail,
  getUserById,
  getUserByDisplayName,
  getUserPosts,
};

