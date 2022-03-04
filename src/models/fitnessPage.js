const mongoose = require("mongoose");

/*var CounterSchema =new mongoose.Schema({
  id: {type: String,default:'contentId'},
  seq: { type: Number, default: 1 }
});
var counter = mongoose.model('counter', CounterSchema);*/

const fitnessSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      default:'fitness',
      unique: true,
      validate(value) {
        if (!(value.toLowerCase()===("fitness"))){
          throw new Error('title must be fitness')
        }
      },
    },
    scheduleImage: {
      type: String,
    },
    scheduleImageLocation:{
        type:String
    },
    mainImage: {
      type: String,
    },
    mainImageLocation:{
type:String
    },
    mainDescription: {
      type: String,
      default:'NONE'
    },
    secondaryDescription: {
      type: String,
      default:'NONE'
   
    },
  },
  { timestamps: true }
);



const FitnessPage = mongoose.model("FitnessPage", fitnessSchema);

module.exports = FitnessPage;
