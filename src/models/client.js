const mongoose = require("mongoose");
const validator = require("validator");

const clientSchema = new mongoose.Schema({
  clientID: {
    type: String,
    required: true,
    unique:true
  },
  firstName:{
    type:String
  },
  lastName:{
   type: String
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase:true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  amount: {
    type: Number,
  },

},{
  timestamps:true
});

const Client = mongoose.model('Client',clientSchema)

module.exports=Client