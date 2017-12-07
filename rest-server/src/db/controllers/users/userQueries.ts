import db from '../../';

const getUserByEmail = async (email) => {
  const user = await db.Users.findOne({
    where: {
      email,
    },
  }, {
    raw: true,
  });
  return user;
};
const getUserById = async (id) => {
  const user = await db.Users.findOne({
    where: {
      id,
    },
  });
  return user;
};

export {
  getUserByEmail,
  getUserById,
};
