const { buildSchema } = require('graphql');

const schema = buildSchema(`
    type Author {
        _id: ID!
        name: String!,
        phoneNo: Float!,
        email: String!,
        address: String!,
    }

    type Query {
        author(name: String):Author
        authors: [Author!]
    }

    input AuthorInput {
        name: String!,
        phoneNo: Float!,
        email: String!,
        address: String!,
    }

    type Mutation {
        createAuthor(author:AuthorInput): Author
    }
    
    schema {
        query: Query
        mutation: Mutation
    }
`);

module.exports = schema;
