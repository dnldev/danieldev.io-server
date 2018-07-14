const mongoose = require('mongoose');

const blogPostSchema = mongoose.Schema({
  url: { type: String, unique: true, required: true },
  headline: { type: String, required: true },
  subheader: { type: String, required: true },
  leadingText: { type: String, required: true },
  post: { type: String, required: true },
  date: { type: Date, default: Date.now },
  imageUrl: String,
});

const projectSchema = mongoose.Schema({
  url: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, default: '' },
  imageUrl: String,
  githubUrl: String,
});

const BlogPostModel = mongoose.model('BlogPost', blogPostSchema);
const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = { BlogPostModel, ProjectModel };
