import { createUser } from '../db/controllers/';

const userController = {
  postUser: async (req, res) => {
    const user = req.body;
    const newUser = await createUser(user);
    res.send(newUser);
  },

  getUsers: () => {

  },
};

export default userController;
