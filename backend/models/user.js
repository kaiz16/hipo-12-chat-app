const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

// model
const User = mongoose.model("users2", userSchema);
module.exports = User