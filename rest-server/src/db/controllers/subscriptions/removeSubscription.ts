import db from '../../';

const removeSubscription = async (user, subUser) => {
  const sub = await db.Subscriptions.findOne({
    where: {
      UserId: user,
      userSubscribedToId: subUser,
    },
  });
  db.Users.increment('followerCount', { where: { id: subUser }, by: -1 });
  sub.destroy();
};

export default removeSubscription;
