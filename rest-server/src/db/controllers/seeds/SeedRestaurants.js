const data = require('../../seedData/restaurants');
const createRestaurantFoodItem = require('../restaurants/CreateFoodItem');
const db = require('../../index');

const testItem = {
  name: 'Test Food',
  rating: 4.5,
  description: '',
};

for (let i = 0; i < 10; i++) {
  const restaurant = {
    name: data[i].name,
    address: data[i].contact,
    website: 'thisisatest.com',
    tags: ['test1', 'test2', 'test3'],
  };
  testItem.description = data[i].description;
  const randUser = (1 + Math.floor(Math.random() * 5));
  db.Users.findOne({ where: { id: randUser } }).then((user) => {
    createRestaurantFoodItem(user, restaurant, [testItem, testItem]);
  });
}
