import { createSubscription, getSubscriptionsById } from "../db/controllers/subscriptions/";

const subscriptionController = {
  postSubscription: async (req, res) => {
    const userId = req.session.user.id;
    const subId = req.body.id;
    const newSub = await createSubscription(userId, subId, 'user');
    res.send(newSub);
  },

  getSubscriptions: async (req, res) => {
    const userId = req.session.user.id;
    const subs = await getSubscriptionsById(userId);
    res.send(subs);
  },
};

export default subscriptionController;
