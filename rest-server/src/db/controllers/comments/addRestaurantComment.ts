import db from '../../';

const addRestaurantComment = async (user, restaurant, { title, text }) => {
  await db.Comments.create({
    title,
    text,
    RestaurantId: user,
  });
};

export default addRestaurantComment;
