import * as mongoose from 'mongoose';

const { Schema } = mongoose;

const keyword = new Schema({
  query: {
    type: String,
    lowercase: true,
  },
  name: String,
  type: {
    type: String,
    lowercase: true,
  },
  id: Number,
  numMentions: Number,
}, {
  runSettersOnQuery: true,
});

export default mongoose.model('Keyword', keyword);
