const mongoose = require("mongoose");
const dayjs = require("dayjs");
const { v4: uuidV4 } = require("uuid");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  uuid: {
    type: String,
    default: uuidV4(),
  },
  name: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [String],
  },
  preparation: {
    type: [String],
  },
  createAt: {
    type: Date,
    default: dayjs(),
  },
  updatedAt: {
    type: Date,
    default: dayjs(),
  },
});

module.exports = Recipe = mongoose.model("Recipe", RecipeSchema);
