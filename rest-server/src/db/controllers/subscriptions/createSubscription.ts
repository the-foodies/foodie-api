import db from '../../';

const createUserSubscription = async (user, subUser, { typeOfSubscription }) => {
  await db.Subscriptions.create({
    typeOfSubscription,
    UserId: user,
    userSubscribedToId: subUser,
  });
};

export default createUserSubscription;
