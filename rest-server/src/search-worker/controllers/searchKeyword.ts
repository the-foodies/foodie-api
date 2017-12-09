import { Keyword } from '../db/models';

export default async (req, res) => {
  const { query } = req.query;
  const searchResults = await Keyword
    .find({
      query: {
        $regex: query,
        $options: 'i',
      },
    });
    // .sort('-numMentions);
    // filter so only one post is sent back
  res.send(searchResults);
};

