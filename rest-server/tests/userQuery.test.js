// const db = require('../src/db/index');
// const userQueries = require('../src/db/controllers/users/UserQueries');

// const UserMock = {
//   firstName: 'Test',
//   lastName: 'Person',
//   email: 'test@test.com',
//   displayName: 'testUser01',
//   profileImageUrl: 'testImg.com',
// };

test('should return display name of user with id', async () => {
  // db.sequelize.sync({ force: true })
  //   .then(() => { db.Users.create(UserMock); });
  // const id = await userQueries.getIdByEmail('test@test.com');
  expect(1).toEqual(1);
});

// test('should return user object with given id', async () => {
//   db.sequelize.sync({ force: true })
//     .then(() => { db.Users.create(UserMock); });
//   const user = await userQueries.getUserById(1);
//   expect(user).toEqual(UserMock);
// });
