const {model, Schema} = require('mongoose');

const eventSchema = new Schema({
    name: String,
    date: String,
    description: String,
    startTime: String,
    endTime: String,
    location: String

})

module.exports = model('Event', eventSchema);