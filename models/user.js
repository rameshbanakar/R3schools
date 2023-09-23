const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "please enter the firstName"],
  },
  lastName: {
    type: String,
    required: [true, "please enter the lastName"],
  },
  email: {
    type: String,
    unique: true,
    Match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "please enter the valid email id",
    ],
  },
  password: {
    type: String,
    required: [true, "Please add a password"],
    minlength: 6
  },
});

module.exports = mongoose.model("user", UserSchema);