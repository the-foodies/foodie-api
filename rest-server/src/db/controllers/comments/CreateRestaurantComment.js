const db = require('../../index');

const addRestaurantComment = async (user, restaurant, { title, text }) => {
  await db.Comments.create({
    title,
    text,
    RestaurantId: user,
  });
};

module.exports = addRestaurantComment;
