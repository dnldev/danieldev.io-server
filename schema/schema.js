const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const queries = require('./queries');
const mutations = require('./mutations');

// APIs

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...queries,
  },
});

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutations,
  },
});

module.exports = {
  queries: new GraphQLSchema({ query }),
  mutations: new GraphQLSchema({ query, mutation }),
};
