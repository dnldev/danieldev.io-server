const {
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} = require('graphql');

const { GraphQLDate } = require('graphql-iso-date');

const { BlogPostModel, ProjectModel } = require('./models');

const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  fields: () => ({
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLDate) },
    post: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const BlogPostInputType = new GraphQLInputObjectType({
  name: 'BlogPostInput',
  fields: () => ({
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    date: { type: new GraphQLNonNull(GraphQLDate) },
    post: { type: new GraphQLNonNull(GraphQLString) },
  }),
});

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    url: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    shortDescription: { type: new GraphQLNonNull(GraphQLString) },
    githubUrl: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
  }),
});

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    blogPost: {
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
    },
    blogPosts: {
      type: new GraphQLList(BlogPostType),
      resolve(parentValue, args) {
        return new Promise((resolve, reject) => {
          BlogPostModel.find(
            {},
            (err, posts) => (err ? reject(err) : resolve(posts))
          );
        });
      },
    },
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPost: {
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
    },
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
