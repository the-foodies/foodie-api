import { createUser, getUserByDisplayName, createSubscription, getUserById } from '../db/controllers'

export default async (req, res) => {
  const user = req.body;
  const validUser = await createUser(user);
  if (validUser[1]) {
    const guyFieri = await getUserByDisplayName('Guy Fieri');
    createSubscription(validUser[0].id, guyFieri.id, 'user')
  }
  req.session.user = validUser[0];
  res.end()
};
