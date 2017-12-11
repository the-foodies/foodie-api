import db from '../../';

const getRestaurantById = async (id) => {
  const restaurant = await db.Restaurants.findOne({
    where: {
      id,
    }
  });
  return restaurant;
}

const getUserRestaurants = async (userId) => {
  console.log(userId)
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
        { model: db.Comments},
      ]
    }]
  })
  return restaurants;
}

export {
  getRestaurantById,
  getUserRestaurants,
}
