const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true, // Name of the person submitting the contact form
  },
  email: {
    type: String,
    required: true, // Email address of the person
    match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, // Regular expression to validate email format
  },
  message: {
    type: String,
    required: true, // Message submitted by the person
  },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

module.exports = ContactModel;
