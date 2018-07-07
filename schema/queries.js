const { GraphQLList, GraphQLNonNull, GraphQLString } = require('graphql');

const { BlogPostModel, ProjectModel } = require('../models');
const { BlogPostType, ProjectType } = require('./types');

const blogPost = {
  type: BlogPostType,
  args: {
    url: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, { url }) {
    return new Promise((resolve, reject) =>
      BlogPostModel.find(
        { url: url },
        (err, post) => (err ? reject(err) : resolve(post))
      )
    );
  },
};

const blogPosts = {
  type: new GraphQLList(BlogPostType),
  resolve(parentValue, args) {
    return new Promise((resolve, reject) => {
      BlogPostModel.find(
        {},
        (err, posts) => (err ? reject(err) : resolve(posts))
      );
    });
  },
};

const project = {
  type: ProjectType,
  args: {
    url: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve(parentValue, { url }) {
    return new Promise((resolve, reject) =>
      ProjectModel.find(
        { url: url },
        (err, project) => (err ? reject(err) : resolve(project))
      )
    );
  },
};

const projects = {
  type: new GraphQLList(ProjectType),
  resolve(parentValue, args) {
    return new Promise((resolve, reject) => {
      ProjectModel.find(
        {},
        (err, projects) => (err ? reject(err) : resolve(projects))
      );
    });
  },
};

module.exports = { blogPost, blogPosts, project, projects };
