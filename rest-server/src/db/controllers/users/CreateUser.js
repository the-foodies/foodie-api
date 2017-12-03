const db = require('../../index');

const createUser = async ({ firstName, lastName, email, displayName, profileImageUrl }) => {
  await db.Users.create({
    firstName,
    lastName,
    email,
    displayName,
    profileImageUrl,
  });
};

module.exports = createUser;
