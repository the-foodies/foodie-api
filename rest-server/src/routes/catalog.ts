import * as express from 'express';
import isLoggedIn from '../middleware/isLoggedIn';
import { getRestaurant, postRestaurant } from '../serverControllers/restaurantController';
import { getRecipe, postRecipe } from '../serverControllers/recipeController';
import { getUser, postUser } from '../serverControllers/userController';
import { getSubscriptions, postSubscription, isSubscribed } from "../serverControllers/subscriptionController";
import { getPosts } from '../serverControllers/postController';

const router = express.Router();

router.route('/restaurants')
  .get(getRestaurant)
  .post(isLoggedIn, postRestaurant)

router.route('/recipes')
  .get(getRecipe)
  .post(isLoggedIn, postRecipe)

router.route('/users')
  .get(getUser)
  .post(isLoggedIn, postUser)

router.route('/subscriptions')
  .get(getSubscriptions)
  .post(isLoggedIn, postSubscription);

router.get('/isSubbed', isSubscribed);

router.get('/posts', getPosts);

export default router;
