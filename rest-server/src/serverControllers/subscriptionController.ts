import { createSubscription, getSubscriptionsById, isUserSubscribed } from "../db/controllers/subscriptions/";

export const postSubscription = async (req, res) => {
  const userId = req.session.user.id;
  const subId = req.body.id;
  const newSub = await createSubscription(userId, subId, 'user');
  res.send(newSub);
}

export const getSubscriptions = async (req, res) => {
  const userId = req.query.id || req.session.user.id;
  const subs = await getSubscriptionsById(userId);
  res.send(subs);
}

export const isSubscribed = async (req, res) => {
  const userId = req.session.user.id;
  const subId = req.query.id;
  const isSubbed = await isUserSubscribed(userId, subId);
  isSubbed === null ? res.send(false) : res.send(true);
}
