const axios = require('axios');
const http = require('axios/lib/adapters/http');

const URL = 'http://localhost:4420';

test('rest should respond', async () => {
  let res = {};
  try {
    res = await axios.get(URL, {
      adapter: http,
    });
  } catch (error) {
    console.error('failed to reach rest-server');
  }
  expect(res.status).toEqual(200);
});
