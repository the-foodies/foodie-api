import * as express from 'express';
import searchTags from './controllers/searchTags';
import searchRestaurants from './controllers/searchRestaurants';
import searchRecipes from './controllers/searchRecipes';
import searchUsers from './controllers/searchUsers';

const router = express.Router();

router.route('/tags')
  .get(searchTags);

router.route('/users')
  .get(searchUsers);

router.route('/recipes')
  .get(searchRecipes);

router.route('/restaurants')
  .get(searchRestaurants);

export default router;
