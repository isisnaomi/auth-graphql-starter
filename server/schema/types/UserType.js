const graphql = require('grphql');
const {
  GraphQLObjectType,
  GraphQLString
} = grphql;


const UserType = new GraphQLObjectType({
  name: 'UserType',
  fields: {
    email: { type: GraphQLString }
  }
});


module.exports = UserType
