import db from '../../';

const createUserSubscription = async (user, subUser, typeOfSubscription) => {
  const newSub = await db.Subscriptions.create({
    typeOfSubscription,
    UserId: user,
    userSubscribedToId: subUser,
  });
  db.Users.increment('followerCount', { where: { id: subUser } });
  return newSub;
};

export default createUserSubscription;
