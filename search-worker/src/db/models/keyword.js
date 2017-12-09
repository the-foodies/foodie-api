const mongoose = require('mongoose');

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

module.exports = mongoose.model('Keyword', keyword);
