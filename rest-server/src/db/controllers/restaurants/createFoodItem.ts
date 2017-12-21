import db from '../../';
import { addTags } from '../../../search-worker/controllers/'

const createFoodItem = async (UserId, restaurant, items) => {
  const restname = restaurant.name.trim();
  const newRestaurant = await db.Restaurants.findOrCreate({ where: { name: restname },
    defaults: { address: restaurant.address, website: restaurant.website, commentCount: 0 } });
  const RestaurantId = await newRestaurant[0].get('id');
  const user = await db.Users.findOne({
    where: {
      id: UserId,
    },
  });
  await newRestaurant[0].addUser(user);
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
  if (!process.env.BUILD_APP) {
    addTags(restaurant.tags, 'restaurant', RestaurantId, restname, 0);
  }
  return newRestaurant;
};

export default createFoodItem;
