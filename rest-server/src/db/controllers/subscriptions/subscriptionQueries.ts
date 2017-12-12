import db from '../../';

const getSubscriptionsById = async (id) => {
  const subscribers = await db.Users.findOne({
    where: {
      id,
    },
    include: [{
      model: db.Subscriptions
    }]
  })
  return subscribers;
}

const isUserSubscribed = async (userId, subId) => {
  const isSubscribed = await db.Subscriptions.findOne({
    where: {
      UserId: userId,
      userSubscribedToId: subId,
    }
  });
}

export default getSubscriptionsById;
