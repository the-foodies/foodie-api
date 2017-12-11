import { createUser } from '../db/controllers'

export default async (req, res) => {
  const user = req.body;
  const validUser = await createUser(user);
  req.session.user = validUser[0];
  res.end()
};
