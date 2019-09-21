const Event = require('../../models/Event.js');

module.exports = {
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