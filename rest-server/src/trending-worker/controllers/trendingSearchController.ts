import { getRecipeById, getRestaurantById } from '../../db/controllers';
import { Keyword } from '../../search-worker/db/models';
import mergeSort from '../../db/utils/mergeSort';

const searchByTrending = async (type) => {
  const searchResults = await Keyword.aggregate([
    { $match: { type: type, numMentions: { $ne: null } } },
    { $group: { _id: '$id', numMentions: { $first: '$numMentions' }, type: { $first: '$type' } } },
    { $sort: { numMentions: -1 } },
    { $limit: 10 }
  ]);
  return searchResults
}
// const searchByTag = async (type, tag) => {
//   const searchResults = await Keyword.aggregate([
//     { $match: { type: type, query: tag, numMentions: { $ne: null } } },
//     { $group: {
//       _id: '$id',
//       numMentions: {
//         $sum: '$numMentions'
//       },
//       query: {
//         $first: '$query'
//       },
//       type: { $first: '$type' }
//       } },
//     { $sort: { numMentions: -1 } },
//     { $limit: 10 }
//   ]);
//   return searchResults
// }
const searchByTags = async (type, tags) => {
  const searchResults = await Keyword.aggregate([
    { $match: {
      type: type,
      query: {
        $in: tags,
      },
      numMentions: { $ne: null }
    } },
    { $group: {
      _id: '$id',
      type: { $first: '$type' },
      name: { $first: '$name' },
      numMentions: {
        $sum: '$numMentions'
      },
    } },
    { $sort: { numMentions: -1 } },
    { $limit: 10 }
  ]);
  return searchResults;
}

export const trendingRestaurants = async (req, res) => {
  const searchResults = await searchByTrending('restaurant');
  const allRestaurants = searchResults.map((result) => {
    return getRestaurantById(result._id);
  })
  const restaurantsWithData = await Promise.all(allRestaurants);
  res.send(restaurantsWithData);
}

export const trendingRecipes = async (req, res) => {
  const searchResults = await searchByTrending('recipe');
  const allRecipes = searchResults.map((result) => {
    return getRecipeById(result._id);
  })
  const recipesWithData = await Promise.all(allRecipes);
  res.send(recipesWithData);
}

// tags must run both because id's are not unique across restaurants and recipes
export const allTrending = async (req, res) => {
  const { query } = req.query;
  let restaurantResults;
  let recipeResults;
  if (query) {
    restaurantResults = await searchByTags('restaurant', [query]);
    recipeResults = await searchByTags('recipe', [query]);
  } else {
    restaurantResults = await searchByTrending('restaurant');
    recipeResults = await searchByTrending('recipe');
  }
  const mergedResults = mergeSort(restaurantResults, recipeResults, 'numMentions');
  const allResults = mergedResults.map((result) => {
    if (result.type === 'restaurant') {
      return getRestaurantById(result._id);
    }
    return getRecipeById(result._id);
  })
  const allData = await Promise.all(allResults);
  res.send(allData);
}

export const allTrendingForTags = async (req, res) => {
  const { query } = req;
  const results = await searchByTags(query.type, query.tag);
  const allResults = results.map((result) => {
    if (result.type === 'restaurant') {
      return getRestaurantById(result._id);
    }
    return getRecipeById(result._id);
  })
  const allData = await Promise.all(allResults);
  res.send(allData);
}
