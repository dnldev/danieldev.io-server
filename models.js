const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  post: { type: String, default: '' },
  date: { type: Date, default: Date.now },
});

const projectSchema = mongoose.Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, default: '' },
  imageUrl: String,
  githubUrl: String,
});

const BlogPostModel = mongoose.model('BlogPost', blogPostSchema);
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = { BlogPostModel, ProjectModel };
