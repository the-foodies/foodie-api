import { Keyword } from '../db/models';

export default async (tags, type, id, name, numMentions) => { 
  const keywords = tags.map((tag) => {
    return {
      query: tag,
      type,
      id,
      name,
      numMentions,
    };
  });
  const newKeywords = await Keyword.create(...keywords);
  return newKeywords
};
