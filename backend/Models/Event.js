const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  title: {
    type: String,
    required: true, // The event name
  },
  teamName: {
    type: String,
    required: true, // The name of the team participating
  },
  numberOfParticipants: {
    type: Number, // Number of participants
    required: true,
    default: 0, // Default value is 0
  },
  participants: {
    type: [String], // Array of Anwesha IDs of participants
    required: true,
  },
});

const EventModel = mongoose.model('Event', EventSchema);

module.exports = EventModel;
