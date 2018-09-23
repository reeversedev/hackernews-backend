# hackernews-backend

**Notes**

1. The typeDefs constant defines your GraphQL schema (more about this in a bit). Here, it defines a simple Query type with one field called info. This field has the type String!. The exclamation mark in the type definition means that this field can never be null.

2. The resolvers object is the actual implementation of the GraphQL schema. Notice how its structure is identical to the structure of the type definition inside typeDefs: Query.info.

3. Finally, the schema and resolvers are bundled and passed to the GraphQLServer which is imported from graphql-yoga. This tells the server what API operations are accepted and how they should be resolved.
