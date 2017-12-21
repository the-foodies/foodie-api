import { createUser } from '../users';
import { getUserByDisplayName, createSubscription } from '../../controllers';

const users = require('../../seedData/user_data.json');

const seedUsers = async (data) => {
  for (let i = 0; i < data.length; i++) {
    const user = {
      email: data[i].email,
      displayName: data[i].displayName,
      profileImageUrl: data[i].profileImageUrl,
    };
    const validUser = await createUser(user);
    if (user.displayName !== 'Guy Fieri' && validUser) {
      const guyFieri = await getUserByDisplayName('Guy Fieri');
      createSubscription(validUser[0].id, guyFieri.id, 'user');
    }
  }
}

seedUsers(users);
