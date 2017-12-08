import { createFoodItem, getUserRestaurants } from "../db/controllers/";

const restaurantController = {
  postRestaurant: async (req, res) => {
    const userId = req.session.user.id;
    const restaurant = req.body;
    const newRestaurant = await createFoodItem(userId, restaurant, restaurant.items);
    res.send(newRestaurant);
  },

  getRestaurants: async (req, res) => {
    const userId = req.session.user.id;
    const restaurants = await getUserRestaurants(userId);
    res.send(restaurants);
  },
};

export default restaurantController;
