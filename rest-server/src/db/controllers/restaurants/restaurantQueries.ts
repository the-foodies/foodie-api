import db from '../../';

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
        { model: db.Comments},
      ]
    }]
  })
  return restaurants;
}

export {
  getUserRestaurants,
}
