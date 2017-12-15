import db from '../../';

const removeSubscription = async (user, subUser) => {
  const sub = await db.Subscriptions.findOne({
    where: {
      UserId: user,
      userSubscribedToId: subUser,
    },
  });
  sub.destroy();
};

export default removeSubscription;
