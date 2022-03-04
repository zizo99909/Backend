const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema(
    {
    
      image: {
        type: String,
      },
      imageLocation: {
        type: String,
      },
      link:{
        type:String,
        required:true
      }
     
    },
    { timestamps: true }
  );
  
  const Table = mongoose.model("Table", tableSchema);
  
  module.exports = Table;
  