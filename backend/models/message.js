const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const message = new Schema({
  text: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model("messages", message);
module.exports = Message;
