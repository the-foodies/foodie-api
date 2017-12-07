import db from '../../';

const getIdByEmail = async (email) => {
  const user = await db.Users.findOne({
    where: {
      email,
    },
  });
  return user.dataValues.id;
};
const getUserById = async (id) => {
  const user = await db.Users.findOne({
    where: {
      id,
    },
  }).then((data) => {
    return {
      firstName: data.dataValues.firstName,
      lastName: data.dataValues.lastName,
      email: data.dataValues.email,
      displayName: data.dataValues.displayName,
      profileImageUrl: data.dataValues.profileImageUrl,
    };
  });
  return user;
};

export {
  getIdByEmail,
  getUserById,
};
