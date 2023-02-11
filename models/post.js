const mongoose = require('mongoose');

const PostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Enter a title'],
    },
    description: {
      type: String,
      required: [true, 'Enter a description'],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
