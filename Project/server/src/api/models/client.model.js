const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId
  },
  username: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true
  },
  address: {
    country: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    state: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    city: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    street: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: true
    },
    apartment: {
      type: String,
      maxlength: 30,
    }
  },
  photoUrl: {
    type: String,
    minlength: 2,
    maxlength: 300,
  },
  notificationOn: {
    type: Boolean,
    default: false
  }
});

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;