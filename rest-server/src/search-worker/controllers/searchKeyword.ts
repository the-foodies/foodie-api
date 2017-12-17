import { Keyword } from '../db/models';

export default async (req, res) => {
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
      if (filteredResults[res.name]) {
        filteredResults[res.name]++;
      } else {
        filteredResults[res.name] = 1;
      }
    }
  });
  console.log(filteredResults);
    // .sort('-numMentions);
    // filter so only one post is sent back
  res.send(filteredResults);
};

