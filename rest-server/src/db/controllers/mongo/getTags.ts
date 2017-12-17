import db from '../../';

const getTags = async () => {
  const recipes = await db.Tags.findAll({
    include: [{
      model: db.Recipes,
      attributes: ['id', 'name', 'commentCount'],
    }],
    raw: true,
  });
  const restaurants = await db.Tags.findAll({
    include: [{
      model: db.Restaurants,
      attributes: ['id', 'name', 'commentCount'],
    }],
    raw: true,
  });
  return (recipes.concat(restaurants));
};

export default getTags;
