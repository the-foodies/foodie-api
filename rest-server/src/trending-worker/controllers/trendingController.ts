import { getRecipeById, getRestaurantById } from '../../db/controllers';
import { Keyword } from '../../search-worker/db/models';

const search = async (type) => {
  const searchResults = await Keyword.aggregate([
    { $match: { type: type, numMentions: { $ne: null } } },
    { $group: { _id: '$id', numMentions: { $first: '$numMentions' }, type: { $first: '$type' } } },
    { $sort: { numMentions: -1 } },
    { $limit: 5 }
  ]);
  return searchResults
}

const mergeSortAlternateSame = (a, b) => {
  let i = 0;
  let j = 0;
  const result = [];
  let lastPushedA = true;
  while (i < a.length && j < b.length) {
    if (a[i].numMentions > b[j].numMentions) {
      result.push(a[i]);
      i += 1;
      lastPushedA = true;
    } else if (a[i].numMentions === b[j].numMentions) {
      if (lastPushedA) {
        result.push(b[j]);
        j += 1;
        lastPushedA = false;
      } else {
        result.push(a[i]);
        i += 1;
        lastPushedA = true;
      }
    } else {
      result.push(b[j]);
      j += 1;
      lastPushedA = false;
    }
  }
  while (i < a.length) {
    result.push(a[i]);
    i += 1;
  }
  while (j < b.length) {
    result.push(b[j]);
    j += 1;
  }
  return result;
}

export const trendingRestaurants = async (req, res) => {
  const searchResults = await search('restaurant');
  const allRestaurants = searchResults.map((result) => {
    return getRestaurantById(result._id);
  })
  const restaurantsWithData = await Promise.all(allRestaurants);
  res.send(restaurantsWithData);
}

export const trendingRecipes = async (req, res) => {
  const searchResults = await search('recipe');
  const allRecipes = searchResults.map((result) => {
    return getRecipeById(result._id);
  })
  const recipesWithData = await Promise.all(allRecipes);
  res.send(recipesWithData);
}

export const allTrending = async (req, res) => {
  const restaurantResults = await search('restaurant');
  const recipeResults = await search('recipe');
  const mergedResults = mergeSortAlternateSame(restaurantResults, recipeResults);
  const allResults = mergedResults.map((result) => {
    if (result.type === 'restaurant') {
      return getRestaurantById(result._id);
    }
    return getRecipeById(result._id);
  })
  const allData = await Promise.all(allResults);
  res.send(allData);
}
