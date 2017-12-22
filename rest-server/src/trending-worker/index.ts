import * as express from 'express';
import {
  trendingRecipes,
  trendingRestaurants,
  allTrending,
  allTrendingForTags,
  allTags,
} from './controllers';

const router = express.Router();

router.route('/recipes')
  .get(trendingRecipes);

router.route('/restaurants')
  .get(trendingRestaurants);

router.route('/tags')
  .get(allTrendingForTags);

router.route('/d3')
  .get(allTags);

router.route('/')
  .get(allTrending);


export default router;
