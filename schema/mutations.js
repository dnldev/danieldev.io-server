const { GraphQLString } = require('graphql');

const { BlogPostModel, ProjectModel } = require('../models');
const {
  BlogPostType,
  BlogPostInputType,
  BlogPostUpdateType,
  ProjectType,
  ProjectInputType,
  ProjectUpdateType,
} = require('./types');

const addBlogPost = {
  type: BlogPostType,
  args: {
    blogPost: { type: BlogPostInputType },
  },
  resolve(parentValue, { blogPost }) {
    return new Promise((resolve, reject) =>
      new BlogPostModel(blogPost).save(
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

const deleteBlogPost = {
  type: BlogPostType,
  args: {
    url: { type: GraphQLString },
  },
  resolve(parentValue, { url }) {
    return new Promise((resolve, reject) =>
      BlogPostModel.findOneAndRemove(
        { url: url },
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

const updateBlogPost = {
  type: BlogPostType,
  args: {
    url: { type: GraphQLString },
    updateValues: { type: BlogPostUpdateType },
  },
  resolve(parentValue, { url, updateValues }) {
    return new Promise((resolve, reject) =>
      BlogPostModel.findOneAndUpdate(
        { url: url },
        updateValues,
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

const deleteProject = {
  type: ProjectType,
  args: {
    url: { type: GraphQLString },
  },
  resolve(parentValue, { url }) {
    return new Promise((resolve, reject) =>
      ProjectModel.findOneAndRemove(
        { url: url },
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

const updateProject = {
  type: ProjectType,
  args: {
    url: { type: GraphQLString },
    updateValues: { type: ProjectUpdateType },
  },
  resolve(parentValue, { url, updateValues }) {
    return new Promise((resolve, reject) =>
      ProjectModel.findOneAndUpdate(
        { url: url },
        updateValues,
        (err, res) => (err ? reject(err) : resolve(res))
      )
    );
  },
};

module.exports = {
  addBlogPost,
  deleteBlogPost,
  updateBlogPost,
  addProject,
  deleteProject,
  updateProject,
};
