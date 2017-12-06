const db = require('../../index');

const createUserSubscription = async (user, subUser, { typeOfSubscription }) => {
  await db.Subscriptions.create({
    typeOfSubscription,
    UserId: user,
    userSubscribedToId: subUser,
  });
};

module.exports = createUserSubscription;
