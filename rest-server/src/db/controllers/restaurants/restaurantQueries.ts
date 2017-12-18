import db from '../../';

const getRestaurantById = async (id) => {
  const restaurant = await db.Restaurants.findOne({
    where: {
      id,
    },
    include: [
      { model: db.FoodItems },
      { model: db.ImagesRestaurants},
      { model: db.Tags },
      { model: db.Comments,
        include: [{
          model: db.Users
        }],
      },
    ]
  });
  return restaurant;
}

const getUserRestaurants = async (userId) => {
  const restaurants = await db.Users.findOne({
    where: {
      id: userId,
    },
    include: [{
      model: db.Restaurants,
      include: [
        { model: db.FoodItems },
        { model: db.ImagesRestaurants},
        { model: db.Tags },
        { model: db.Comments,
          include: [{
            model: db.Users
          }],
        },
      ]
    }]
  })
  return restaurants;
}

export {
  getRestaurantById,
  getUserRestaurants,
}
