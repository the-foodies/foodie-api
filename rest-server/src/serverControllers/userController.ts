import { createUser, getUserById } from '../db/controllers/';

const userController = {
  postUser: async (req, res) => {
    const user = req.body;
    const newUser = await createUser(user);
    res.send(newUser);
  },

  getUser: async (req, res) => {
    const id = req.query.id || req.session.user.id;
    const user = await getUserById(id);
    res.send(user);
  },
};

export default userController;
