const mongoose = require("mongoose");
const validator = require("validator");

const homeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,

      trim: true,
      validate(value) {
        if (!(value.toLowerCase()===("gym")||value.toLowerCase()===('ballet')||value.toLowerCase()===('fitness'))) {
          throw new Error('title must be gym or ballet or fitness!')
        }
      },
    },
    image: {
      type: String,
    },
    imageLocation: {
      type: String,
    },
    facebookLink: {
      type: String,
      default: "NONE",
      validate(value) {
        if (!validator.isURL(value)) {
          return "NONE";
        }
      },
    },
    instagramLink: {
      type: String,
      default: "NONE",
      validate(value) {
        if (!validator.isURL(value)) {
          return "NONE";
        }
      },
    },
    whatsappLink: {
      type: String,
      default: "NONE",
      validate(value) {
        if (!validator.isURL(value)) {
          return "NONE";
        }
      },
    },
  },
  { timestamps: true }
);

const HomePage = mongoose.model("HomePage", homeSchema);

module.exports = HomePage;
