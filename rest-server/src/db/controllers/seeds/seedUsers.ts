import { createUser } from '../users'

const data = require('../../seedData/user_data.json');

for (let i = 0; i < data.length; i++) {
  const user = {
    email: data[i].email,
    displayName: data[i].displayName,
    profileImageUrl: data[i].profileImageUrl,
  };
  createUser(user);
}
