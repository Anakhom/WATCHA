const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
  }, 
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    default: 'Your first name',
    required: false,
  },
  lastName: {
    type: String,
    default: 'Your last name',
    required: false,
  },
  watched: {
    type: Array,
    required: false,
  },
  want: {
    type: Array,
    required: false,
  },
  followers: {
    type: Array,
    required: false,
  },
  following: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', userSchema);
module.exports = User;
