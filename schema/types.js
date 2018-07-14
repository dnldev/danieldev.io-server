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
    headline: { type: GraphQLString },
    subheader: { type: GraphQLString },
    leadingText: { type: GraphQLString },
    post: { type: GraphQLString },
    date: { type: GraphQLDate },
    imageUrl: { type: GraphQLString },
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
    headline: { type: new GraphQLNonNull(GraphQLString) },
    subheader: { type: new GraphQLNonNull(GraphQLString) },
    leadingText: { type: new GraphQLNonNull(GraphQLString) },
    post: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: GraphQLDate },
    imageUrl: { type: GraphQLString },
  }),
});

const BlogPostUpdateType = new GraphQLInputObjectType({
  name: 'BlogPostUpdate',
  fields: () => ({
    url: { type: GraphQLString },
    headline: { type: GraphQLString },
    subheader: { type: GraphQLString },
    leadingText: { type: GraphQLString },
    post: { type: GraphQLString },
    date: { type: GraphQLDate },
    imageUrl: { type: GraphQLString },
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

const ProjectUpdateType = new GraphQLInputObjectType({
  name: 'ProjectUpdate',
  fields: () => ({
    url: { type: GraphQLString },
    title: { type: GraphQLString },
    shortDescription: { type: GraphQLString },
    githubUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

module.exports = {
  BlogPostType,
  BlogPostInputType,
  BlogPostUpdateType,
  ProjectType,
  ProjectInputType,
  ProjectUpdateType,
};
