const {
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

// Types

const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  fields: () => ({
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    date: { type: GraphQLDate },
    post: { type: GraphQLString },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    shortDescription: { type: GraphQLString },
    githubUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

// Input Types

const BlogPostInputType = new GraphQLInputObjectType({
  name: 'BlogPostInput',
  fields: () => ({
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLDate },
    post: { type: GraphQLString },
  }),
});

const ProjectInputType = new GraphQLInputObjectType({
  name: 'ProjectInput',
  fields: () => ({
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    shortDescription: { type: GraphQLString },
    githubUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

module.exports = {
  BlogPostType,
  BlogPostInputType,
  ProjectType,
  ProjectInputType,
};
