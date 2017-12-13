import { createUser, getUserById, getUserByDisplayName } from '../db/controllers/';

const userController = {
  postUser: async (req, res) => {
    const user = req.body;
    const newUser = await createUser(user);
    res.send(newUser);
  },

  getUser: async (req, res) => {
    let user;
    if (req.query.id) {
      user = await getUserById(req.query.id);
    } else if (req.query.displayName) {
      user = await getUserByDisplayName(req.query.displayName);
      console.log(user);
    } else {
      user = await getUserById(req.session.user.id);      
    }
    res.send(user);
  },
};

export default userController;
