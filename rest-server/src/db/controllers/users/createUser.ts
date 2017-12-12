import db from '../../';

const createUser = async ({ email, displayName, profileImageUrl }) => {
  const newUser = await db.Users.findOrCreate({
    where: {
      email
    },
    defaults: {
      displayName,
      profileImageUrl,
      followerCount: 0,
    },
    raw: true,
  });
  return newUser;
};

export default createUser;
