const db = require('../db/models/');

module.exports = async (req, res) => { 
  const { tags, type, id, name } = req.body;

  const keywords = tags.map((tag) => {
    return {
      query: tag,
      type,
      id,
      name,
    };
  });
  const newKeyword = await db.Keyword.create(...keywords);
  res.send(newKeyword);
};
