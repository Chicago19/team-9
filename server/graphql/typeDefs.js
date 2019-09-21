const {gql} = require('apollo-server');

module.exports = gql`
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