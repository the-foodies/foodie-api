import { getUserPosts } from "../db/controllers/";

const getPosts = async (req, res) => {
  const userId = req.session.user.id;
  const posts = await getUserPosts(userId);
  res.send(posts);
};

export default getPosts;
