import { getUserPosts } from "../db/controllers/";

export const getPosts = async (req, res) => {
  const userId = req.query.id ? req.query.id : req.session.user.id;
  const page = req.query.page || 1;
  console.log(page);
  const posts = await getUserPosts(userId, page*5);
  res.send(posts);
};
