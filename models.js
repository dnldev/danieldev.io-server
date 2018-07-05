const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  post: { type: String, required: true },
});

const projectSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  imageUrl: String,
  githubUrl: String,
});

const BlogPostModel = mongoose.model('BlogPost', blogPostSchema);
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = { BlogPostModel, ProjectModel };
