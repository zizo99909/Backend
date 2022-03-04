const mongoose = require("mongoose");

/*var CounterSchema =new mongoose.Schema({
  id: {type: String,default:'contentId'},
  seq: { type: Number, default: 1 }
});
var counter = mongoose.model('counter', CounterSchema);*/

const gymSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "gym",
      unique: true,
      validate(value) {
        if (!(value.toLowerCase() === "gym")) {
          throw new Error("title must be gym");
        }
      },
    },
    scheduleImage: {
      type: String,
    },
    scheduleImageLocation: {
      type: String,
    },
    mainImage: {
      type: String,
    },
    mainImageLocation: {
      type: String,
    },
    mainDescription: {
      type: String,
      default: "NONE",
    },
    secondaryDescription: {
      type: String,
      default: "NONE",
    },
  },
  { timestamps: true }
);

/*gymSchema.post("save", function () {
  //function to increment id each record
  const page = this;
  
console.log(page.title)
console.log(page.mainImageLocation)

  if (!await(page.scheduleImageLocation && page.mainImageLocation)) {
     throw new Error('schedule image and main image must be uploaded')
  }
  
});*/

const GymPage = mongoose.model("GymPage", gymSchema);

module.exports = GymPage;
