import { Keyword } from '../db/models';

export default async (req, res) => {
  const { query } = req.query;
  const filteredResults = {};
  const finalResults = [];
  const searchResults = await Keyword.find({
    query: {
      $regex: query,
      $options: 'i',
    },
  })
    .lean()
    .sort({ numMentions: -1 })
    .limit(10);
  searchResults.forEach((res) => {
    if (res.name !== null) {
      if (!filteredResults[res.query]) {
        const obj = {
          id: res.id,
          name: res.name,
          type: res.type,
          numMentions: res.numMentions,
          tag: res.query,
        };
        filteredResults[res.query] = obj;
        finalResults.push(obj);
      }
    }
  });
  res.send(finalResults);
};

