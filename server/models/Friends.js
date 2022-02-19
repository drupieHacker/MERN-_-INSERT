const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  apellido: {
    type: String,
    required: false,

  }
});

const FriendModel = mongoose.model("Friends", FriendSchema);

module.exports = FriendModel;