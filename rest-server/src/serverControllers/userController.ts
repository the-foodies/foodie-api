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
    console.log(user);
  } else {
    user = await getUserById(req.session.user.id);
  }
  res.send(user);
}

export const postComment = async (req, res, next) => {
  // poster is who owns the post, user is tied to the comment itself
  const {
    user,
    poster,
    restaurant,
    recipe,
    text,
  } = req.body;
  if (restaurant) {
    addRestaurantComment(user, poster, restaurant, text);
  } else if (recipe) {
    addRecipeComment(user, poster, recipe, text);
  } else {
    next();
  }
}
