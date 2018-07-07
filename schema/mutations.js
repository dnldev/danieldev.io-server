const { BlogPostModel, ProjectModel } = require('../models');
const {
  BlogPostType,
  BlogPostInputType,
  ProjectType,
  ProjectInputType,
} = require('./types');

const addPost = {
  type: BlogPostType,
  args: {
    post: { type: BlogPostInputType },
  },
  resolve(parentValue, { post }) {
    return new Promise((resolve, reject) =>
      new BlogPostModel(post).save(
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

const addProject = {
  type: ProjectType,
  args: {
    project: { type: ProjectInputType },
  },
  resolve(parentValue, { project }) {
    return new Promise((resolve, reject) =>
      new ProjectModel(project).save(
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

module.exports = { addPost, addProject };
