const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = Schema({
  content: String,
  creatorId:  Number,
  picPath: String,
  picName: String
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;