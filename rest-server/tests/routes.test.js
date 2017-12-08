const axios = require('axios');
const http = require('axios/lib/adapters/http');

const URL = 'http://localhost:4420/login';

test('rest should respond', async () => {
  let res = {};
  try {
    res = await axios.post(URL, {
      adapter: http,
    });
  } catch (error) {
    // console.error('failed to reach rest-server', error);
  }
  expect(res.status).toEqual(200);
});
