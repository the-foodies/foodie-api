import { getUserByEmail } from '../db/controllers'

export default async (req, res) => {
  const user = req.body;
  const validUser = await getUserByEmail(user.email);
  if (validUser) {
    req.session.user = validUser;
    res.send(req.session.user);
  } else {
    res.send(false);
  }
};
