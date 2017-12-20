import { Keyword } from '../db/models';

export default async (req, res) => {
  const { query } = req.query;
  const filteredResults = {};
  const searchResults = await Keyword.find({
    type : { $eq : 'user' },
    name: {
      $regex: query,
      $options: 'i',
    },
  });
  searchResults.forEach((res) => {
    if (res.name !== null) {
      if (!filteredResults[res.id]) {
        const obj = {
          id: res.id,
          name: res.name,
          type: res.type,
          numMentions: res.numMentions,
        };
        filteredResults[res.id] = obj;
      }
    }
  });
  console.log(filteredResults);
    // .sort('-numMentions);
    // filter so only one post is sent back
  res.send(filteredResults);
};
