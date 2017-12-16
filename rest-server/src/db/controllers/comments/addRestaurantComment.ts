import db from '../../';

const addRestaurantComment = async ({ user, poster, restaurant, comment }) => {
  const addedComment = await db.Comments.create({
    text: comment.text,
    RestaurantId: restaurant.id,
    UserId: user.id,
    posterId: poster.id,
  });
  db.Restaurants.increment('commentCount', { where: { id: restaurant.id } });
  return addedComment;
};

export default addRestaurantComment;
