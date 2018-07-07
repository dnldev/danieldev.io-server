const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String },
  date: { type: Date },
  post: { type: String },
});

const projectSchema = mongoose.Schema({
  url: { type: String },
  title: { type: String },
  shortDescription: { type: String },
  imageUrl: String,
  githubUrl: String,
});

const BlogPostModel = mongoose.model('BlogPost', blogPostSchema);
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = { BlogPostModel, ProjectModel };
