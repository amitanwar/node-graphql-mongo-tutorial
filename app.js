const devenv = require('dotenv');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const graphqlSchema = require('./app/graphql/schema'),
  graphqlResolver = require('./app/graphql/resolvers');

// devenv loads the enviroment variable into process
devenv.config();
//
const connect = require('./app/helper/connection');

const app = express();

// local enviroment varible
//dotenv.config();

app.get('/', (req, res) => {
  res.send('successfully render');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log('now listing for requests on port 5000');
});
