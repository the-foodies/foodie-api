import db from '../../';

const createFoodItem = async (UserId, restaurant, items) => {
  const newRestaurant = await db.Restaurants.findOrCreate({ where: { name: restaurant.name },
    defaults: { address: restaurant.address, website: restaurant.website, commentCount: 0 } });
  await newRestaurant[0].addUser(UserId);
  const RestaurantId = await newRestaurant[0].get('id');
  if (restaurant.imageURL) {
    await db.ImagesRestaurants.create({
      RestaurantId,
      UserId,
      image_url: restaurant.imageURL,
    })
  }
  await items.forEach((item) => {
    db.FoodItems.create({
      name: item.name,
      rating: item.rating,
      description: item.description,
      RestaurantId,
      UserId,
    });
  });
  await restaurant.tags.forEach((name) => {
    db.Tags.findOrCreate({ where: { name } })
      .spread((tag) => {
        tag.addRestaurant(newRestaurant[0]);
      });
  });
  return newRestaurant;
};

export default createFoodItem;
