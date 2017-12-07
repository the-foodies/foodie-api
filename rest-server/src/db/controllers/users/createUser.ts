import db from '../../';

const createUser = async ({ firstName, lastName, email, displayName, profileImageUrl }) => {
  const newUser = await db.Users.findOrCreate({
    where: {
      email
    },
    defaults: {
      firstName,
      lastName,
      displayName,
      profileImageUrl,
    }
  });
  return newUser;
};

export default createUser;
