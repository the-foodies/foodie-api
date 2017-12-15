import db from '../../';

const getSubscriptionsById = async (id) => {
  const subscriptions = await db.Subscriptions.findAll({
    where: {
      UserId: id,
    },
    include: [{
      model: db.Users,
      as: 'userSubscribedTo',
    }],
    raw: true
  });
  const subscribees = await db.Subscriptions.findAll({
    where: {
      userSubscribedToId: id,
    },
    include: [{
      model: db.Users,
    }],
    raw: true
  });
  const output = {
    subscriptions,
    subscribees,
  }
  return output;
};

const isUserSubscribed = async (userId, subId) => {
  const isSubscribed = await db.Subscriptions.findOne({
    where: {
      UserId: userId,
      userSubscribedToId: subId,
    }
  });
  return isSubscribed;
};

export {
  getSubscriptionsById,
  isUserSubscribed,
};
