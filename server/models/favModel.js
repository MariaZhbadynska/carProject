const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favSchema = new Schema(
  {
    photo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    versionKey: false,
  }
);

const Fav = mongoose.model("Fav", favSchema);

module.exports = Fav;
