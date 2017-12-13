import { getUserPosts } from "../db/controllers/";

const getPosts = async (req, res) => {
  const userId = req.query.id ? req.query.id : req.session.user.id;
  const posts = await getUserPosts(userId);
  // console.log('user is', req.query.id, 'posts', posts);
  res.send(posts);
};

export default getPosts;
