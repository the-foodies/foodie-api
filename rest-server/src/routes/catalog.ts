import * as express from 'express';
import restaurantController from '../serverControllers/restaurantController';
import recipeController from '../serverControllers/recipeController';
import userController from '../serverControllers/userController';
import getPosts from '../serverControllers/postController';

const router = express.Router();

// const createRestaurantFoodItem = require('../db/controllers/restaurants/CreateFoodItem');

router.post('/restaurants', restaurantController.postRestaurant);

router.get('/restaurants', restaurantController.getRestaurants);

router.post('/recipes', recipeController.postRecipe);

router.get('/recipes', recipeController.getRecipes);

router.post('/users', userController.postUser);

router.get('/users', userController.getUsers);

router.get('/posts', getPosts);

export default router;
