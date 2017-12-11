import { Keyword } from '../db/models';

export default async (req, res) => { 
  const { tags, type, id, name } = req.body;

  const keywords = tags.map((tag) => {
    return {
      query: tag,
      type,
      id,
      name,
    };
  });
  const newKeyword = await Keyword.create(...keywords);
  res.send(newKeyword);
};
