const mongoose = require("mongoose");


const balletSchema = new mongoose.Schema(
  {
    
    title: {
      type: String,
      default:'ballet',
      unique: true,
      validate(value) {
        if (!(value.toLowerCase()===("ballet"))){
          throw new Error('title must be ballet')
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


const BalletPage = mongoose.model("BalletPage", balletSchema);

module.exports = BalletPage;
