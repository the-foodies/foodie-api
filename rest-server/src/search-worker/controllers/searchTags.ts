import { Keyword } from '../db/models';

export default async (req, res) => {
  console.log(req.query);
  const { query } = req.query;
  const filteredResults = {};
  const searchResults = await Keyword.find({
    query: {
      $regex: query,
      $options: 'i',
    },
  });
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
      }
    }
  });
  console.log(filteredResults);
    // .sort('-numMentions);
    // filter so only one post is sent back
  res.send(filteredResults);
};

