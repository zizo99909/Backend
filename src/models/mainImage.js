const mongoose = require("mongoose");

const mainImageSchema = new mongoose.Schema(
    {
    
      image: {
        type: String,
      },
      imageLocation: {
        type: String,
      },
      secret:{
        type:String,
        required:true,
        unique:true,
        default:'test'
      }
     
    },
    { timestamps: true }
  );
  
  const MainImage = mongoose.model("HomeMainImage", mainImageSchema);
  
  module.exports = MainImage;
  