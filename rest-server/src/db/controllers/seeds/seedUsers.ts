import { createUser } from '../users'

const randomStr = () => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

for (let i = 0; i < 5; i++) {
  const user = {
    firstName: randomStr(),
    lastName: randomStr(),
    email: randomStr(),
    displayName: randomStr(),
    password: randomStr(),
    profileImageUrl: randomStr(),
  };
  createUser(user);
}
