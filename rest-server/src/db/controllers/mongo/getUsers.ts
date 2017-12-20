import db from '../../';

const getUsers = async () => {
  const users = await db.Users.findAll({
    attributes: ['id', 'name', 'commentCount'],
    raw: true,
  });
  return users;
};

export default getUsers;
