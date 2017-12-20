import * as express from 'express';
import { trendingRecipes, trendingRestaurants, allTrending } from './controllers';

const router = express.Router();

router.route('/recipes')
  .get(trendingRecipes);

router.route('/restaurants')
  .get(trendingRestaurants);

router.route('/')
  .get(allTrending);


export default router;
