import db from '../../';

const getSubscriptionsById = async (id) => {
  const subscriptions = await db.Users.findOne({
    where: {
      id,
    },
    include: [{
      model: db.Subscriptions
    }]
  });
  const subscribees = await db.Subscriptions.findAll({
    where: {
      userSubscribedToId: id,
    }
  });
  let temp = [];
  await subscribees.forEach((subscriber) => {
    temp.push(subscriber.dataValues);
  });
  const output = {
    subscriptions: subscriptions.dataValues.Subscriptions,
    subscribees: temp,
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
