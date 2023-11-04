const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  name: { type: String, required: true },
});

//collection create
const User = mongoose.model("Users", Userschema);

module.exports = User;
