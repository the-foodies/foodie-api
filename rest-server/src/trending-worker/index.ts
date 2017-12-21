import * as express from 'express';
import {
  trendingRecipes,
  trendingRestaurants,
  allTrending,
  allTrendingForTags
} from './controllers';

const router = express.Router();

router.route('/recipes')
  .get(trendingRecipes);

router.route('/restaurants')
  .get(trendingRestaurants);

router.route('/tags')
  .get(allTrendingForTags);

router.route('/')
  .get(allTrending);


export default router;
