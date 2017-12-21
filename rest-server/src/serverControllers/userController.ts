import { createUser, getUserById, getUserByDisplayName, addRecipeComment, addRestaurantComment } from '../db/controllers/';

export const postUser = async (req, res) => {
  const user = req.body;
  const newUser = await createUser(user);
  res.send(newUser);
}

export const getUser = async (req, res) => {
  let user;
  if (req.query.id) {
    user = await getUserById(req.query.id);
  } else if (req.query.displayName) {
    user = await getUserByDisplayName(req.query.displayName);
  } else {
    user = await getUserById(req.session.user.id);
  }
  res.send(user);
}

export const postComment = async (req, res, next) => {
  // poster is who owns the post, user is tied to the comment itself
  const user = req.session.user;
  const {
    poster,
    restaurant,
    recipe,
    comment,
  } = req.body;
  if (restaurant) {
    const addedComment = await addRestaurantComment({ user, poster, restaurant, comment });
    res.send(addedComment);    
  } else if (recipe) {
    const addedComment = await addRecipeComment({ user, poster, recipe, comment });
    res.send(addedComment);    
  } else {
    next();
  }
}
