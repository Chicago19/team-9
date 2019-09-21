const eventresolvers = require('./events.js');

module.exports = {
    Query: {
        ...eventresolvers.Query
    }
}