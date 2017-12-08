import { createUser } from '../db/controllers'

export default async (req, res) => {
  const user = req.body;
  const validUser = await createUser(user);
  if (validUser[1] === true) {
    req.session.user = validUser[0];
    res.send(req.session.user);
  } else {
    res.send(false);
  }
};
