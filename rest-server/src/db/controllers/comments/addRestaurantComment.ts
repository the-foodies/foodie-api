import db from '../../';

const addRestaurantComment = async (user, poster, restaurant, text) => {
  await db.Comments.create({
    text,
    RestaurantId: restaurant.id,
    UserId: user.id,
    posterId: poster.id,
  });
};

export default addRestaurantComment;
