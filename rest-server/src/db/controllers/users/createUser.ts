import db from '../../';

const createUser = async ({ firstName, lastName, email, displayName, profileImageUrl }) => {
  await db.Users.create({
    firstName,
    lastName,
    email,
    displayName,
    profileImageUrl,
  });
};

export default createUser;
