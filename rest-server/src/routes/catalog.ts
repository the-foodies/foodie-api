import * as express from 'express';
import restaurantController from '../serverControllers/restaurantController';
import recipeController from '../serverControllers/recipeController';
import userController from '../serverControllers/userController';
import subscriptionController from "../serverControllers/subscriptionController";
import getPosts from '../serverControllers/postController';

const router = express.Router();

// const createRestaurantFoodItem = require('../db/controllers/restaurants/CreateFoodItem');

router.route('/restaurants')
  .get(restaurantController.getRestaurant)
  .post(restaurantController.postRestaurant)

router.route('/recipes')
  .get(recipeController.postRecipe)
  .post(recipeController.getRecipe)

router.route('/users')
  .post(userController.postUser)
  .get(userController.getUser)

router.route('/subscriptions')
  .get(subscriptionController.getSubscriptions)
  .post(subscriptionController.postSubscription);

router.get('/posts', getPosts);

export default router;
