const db = require('../../index');

const createRestaurantFoodItem = async (user, restaurant, items) => {
  const newRestaurant = await db.Restaurants.findOrCreate({ where: { name: restaurant.name },
    defaults: { address: restaurant.address, website: restaurant.website } });
  await newRestaurant[0].addUser(user);
  const id = await newRestaurant[0].get('id');
  await items.forEach((item) => {
    db.FoodItems.create({
      name: item.name,
      rating: item.rating,
      description: item.description,
      RestaurantId: id,
    });
  });
  await restaurant.tags.forEach((name) => {
    db.Tags.findOrCreate({ where: { name } })
      .spread((tag) => {
        tag.addRestaurant(newRestaurant[0]);
      });
  });
};

module.exports = createRestaurantFoodItem;
