import { createFoodItem, getUserRestaurants } from "../db/controllers/";

const restaurantController = {
  postRestaurant: async (req, res) => {
    const userId = 1;
    const restaurant = req.body;
    const newRestaurant = await createFoodItem(userId, restaurant, restaurant.items);
    res.send(newRestaurant);
  },

  getRestaurants: async (req, res) => {
    const userId = 1;
    const restaurants = await getUserRestaurants(userId);
    res.send(restaurants);
  },
};

module.exports = restaurantController;
