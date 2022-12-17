const mongoose = require("mongoose");
const dayjs = require("dayjs");
const { v4: uuidV4 } = require("uuid");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  uuid: {
    type: String,
    default: uuidV4(),
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  registerDate: {
    type: Date,
    default: dayjs(),
  },
});

module.exports = User = mongoose.model("User", UserSchema);
