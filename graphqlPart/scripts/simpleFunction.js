import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

console.log('!! start !!');

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      }
    }
  })
});

let rightQuery = '{ hello }';
graphql(schema, rightQuery).then(result => {
  console.log(result);
});

let wrongQuery = '{ canNotFindYou }';
graphql(schema, wrongQuery).then(result => {
  console.log(result);
});
