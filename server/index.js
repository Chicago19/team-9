const {ApolloServer} = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config.js');
const Event = require('./models/Event');

const typeDefs = gql`
    type Event{
        name: String!
        date: String!
        description: String!
        startTime: String!
        endTime: String!
        location: String!
    }
    type Query{
        getEvents: [Event]
}
`
const resolvers = {
    Query: {
        async getEvents() {
            try{
                const events = await Event.find();
                return events;
            } catch (err){
                throw new Error(err);
            }
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
            console.log('MongoDB Connected');
            return server.listen({port: 5000}); 
    }).then(res =>{
        console.log('Server running at ' + res.url );
    });


    