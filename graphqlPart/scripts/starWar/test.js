import { StarWarsSchema } from './starWarsSchema.js';
import { graphql } from 'graphql';

let singleQuery = `
  query HeroNameQuery {
    hero {
      name
    }
  }
`;

graphql(StarWarsSchema, singleQuery).then(result => {
  console.log('singleQuery');
  console.log(result);
});

let nestedQuery = `
  query NestedQuery {
    hero {
      name
      friends {
        name
        appearsIn
        friends {
          name
        }
      }
    }
  }
`;

graphql(StarWarsSchema, nestedQuery).then(result => {
  console.log('nestedQuery');
  console.log(JSON.stringify(result));
});

//Using IDs and query parameters to refetch objects
let parameterQuery = `
  query FetchLukeQuery {
    human(id: "1000") {
      name
    }
  }
`;
graphql(StarWarsSchema, parameterQuery).then(result => {
  console.log('parameterQuery');
  console.log(JSON.stringify(result));
});

//Using IDs and query parameters to refetch objects, pass para
let setedParameterQuery = `
  query FetchSomeIDQuery($someId: String!) {
    human(id: $someId) {
      name
    }
  }
`;
var params = {
  someId: '1002'
};
graphql(StarWarsSchema, setedParameterQuery).then(result => {
  console.log('setedParameterQuery');
  console.log(JSON.stringify(result));
});
