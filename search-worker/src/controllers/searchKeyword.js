const db = require('../db/models/');


module.exports = async (req, res) => {
  const query = req.query.query;
  const searchResults = await db.Keyword
    .find({
      query: {
        $regex: query,
        $options: 'i',
      },
    });
    // .sort('-numMentions);
  res.send(searchResults);
};

