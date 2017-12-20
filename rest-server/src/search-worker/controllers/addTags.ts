import { Keyword } from '../db/models';

export default async (tags, type, id, name) => { 

  const keywords = tags.map((tag) => {
    return {
      query: tag,
      type,
      id,
      name,
    };
  });
  const newKeywords = await Keyword.create(...keywords);
  return newKeywords
};
