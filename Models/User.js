const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must provide title"],
  },
  description: {
    type: String,
    required: [true, "Please Provide Description"],
  },
  category: {
    type: String,
    required: [true, "Please Provide Category"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
