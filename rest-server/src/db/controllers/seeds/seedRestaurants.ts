import db from '../../';
import { createFoodItem } from '../';

const data = require('../../seedData/restImages.json');

const testItem = {
  name: 'Test Food',
  rating: 4.5,
  description: '',
};

for (let i = 0; i < 10; i++) {
  const restaurant = {
    name: data[i].name,
    address: data[i].contact,
    imageURL: data[i].imageURL || 'https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/06/i-1-sonic-burger.jpg',
    website: 'thisisatest.com',
    tags: ['item1', 'item2', 'item3'],
  };
  testItem.description = data[i].description;
  const randUser = (1 + Math.floor(Math.random() * 5));
  createFoodItem(randUser, restaurant, [testItem, testItem]);
}
