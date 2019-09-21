const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');

const typeDefs = gql`
    type Query{
        getEvents: String!
}
`
const resolvers = {
    Query: {
        getEvents: () => 'Hello World'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen({port: 5000})
    .then(res =>{
        console.log('Server running at ' + res.url );
    });