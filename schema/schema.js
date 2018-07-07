const {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

const { blogPost, blogPosts, project, projects } = require('./queries');
const { addPost, addProject } = require('./mutations');

// APIs

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    blogPost: blogPost,
    blogPosts: blogPosts,
    project: project,
    projects: projects,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: addPost,
    addProject: addProject,
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
