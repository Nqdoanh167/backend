/** @format */

const mongoose = require('mongoose');
const {Schema} = mongoose;

const blogSchema = new Schema(
  {
    title: String,
    author_name: String,
    summary: String,
    content: String,
    image: String,
    updatedBy: {
      _id: String,
      name: String,
      avatar: String,
    },
  },
  {
    timestamps: true,
  },
);

blogSchema.methods = {
  view() {
    return {
      _id: this._id,
      title: this.title,
      author_name: this.author_name,
      summary: this.summary,
      content: this.content,
      image: this.image,
      updatedBy: this.updatedBy,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  },
};

const Blog = mongoose.model('Blog', blogSchema);
const blogCreateDto = {
  title: Blog.schema.tree.title,
  author_name: Blog.schema.tree.author_name,
  summary: Blog.schema.tree.summary,
  content: Blog.schema.tree.content,
  image: Blog.schema.tree.image,
};
module.exports = {
  Blog,
  blogCreateDto,
};