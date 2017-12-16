import { createFoodItem, getRestaurantById } from "../db/controllers/";

export const postRestaurant = async (req, res) => {
  const userId = req.session.user.id;
  const restaurant = req.body;
  const newRestaurant = await createFoodItem(userId, restaurant, restaurant.foodItems);
  res.send({
    id: newRestaurant[0].dataValues.id,
    name: newRestaurant[0].dataValues.name,
  });
}

export const getRestaurant = async (req, res) => {
  const restaurantId = req.query.id;
  const restaurant = await getRestaurantById(restaurantId);
  res.send(restaurant);
}
