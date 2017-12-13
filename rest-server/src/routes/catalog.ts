import * as express from 'express';
import isLoggedIn from '../middleware/isLoggedIn';
import restaurantController from '../serverControllers/restaurantController';
import recipeController from '../serverControllers/recipeController';
import userController from '../serverControllers/userController';
import subscriptionController from "../serverControllers/subscriptionController";
import getPosts from '../serverControllers/postController';

const router = express.Router();

// const createRestaurantFoodItem = require('../db/controllers/restaurants/CreateFoodItem');

router.route('/restaurants')
  .get(restaurantController.getRestaurant)
  .post(isLoggedIn, restaurantController.postRestaurant)

router.route('/recipes')
  .get(recipeController.getRecipe)
  .post(isLoggedIn, recipeController.postRecipe)

router.route('/users')
  .get(userController.getUser)
  .post(isLoggedIn, userController.postUser)

router.route('/subscriptions')
  .get(subscriptionController.getSubscriptions)
  .post(isLoggedIn, subscriptionController.postSubscription);

router.get('/posts', getPosts);

export default router;
