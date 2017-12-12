import { getUserPosts } from "../db/controllers/";

const getPosts = async (req, res) => {
  console.log('session is', req.session);
  const userId = req.session.user.id;
  const posts = await getUserPosts(userId);
  res.send(posts);
};

export default getPosts;
