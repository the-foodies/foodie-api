const express = require('express');
const restaurantController = require('../serverControllers/restaurantController');
const recipeController = require('../serverControllers/recipeController');
const userController = require('../serverControllers/userController');

const router = express.Router();

// const createRestaurantFoodItem = require('../db/controllers/restaurants/CreateFoodItem');

router.post('/restaurants', restaurantController.postRestaurant);

router.get('/restaurants', restaurantController.getRestaurants);

router.post('/recipes', recipeController.postRecipe);

router.get('/recipes', recipeController.getRecipes);

router.post('/users', userController.postUser);

router.get('/users', userController.getUsers);

export default router;
