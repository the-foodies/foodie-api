import { Keyword } from '../db/models';
import getTags from '../../db/controllers/mongo/getTags';
import * as mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_CONNECT || 'mongodb://localhost/foodieSearch',
  { useMongoClient: true },
);

const seedMongo = (async () => {
  const tags = await getTags();
  const keywords = tags.map((tag) => {
    if (tag['Recipes.id']) {
      return {
        query: tag.name,
        type: 'recipe',
        id: tag['Recipes.id'],
        name: tag['Recipes.name'],
      };
    } else {
      return {
        query: tag.name,
        type: 'restaurant',
        id: tag['Restaurants.id'],
        name: tag['Restaurants.name'],
      };
    }
  });
  Keyword.create(...keywords);
})();
