const mongoose = require("mongoose");
const validator = require("validator");

const adminSchema = new mongoose.Schema({
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
  encryptedPassword: {
    type: String,
    required:true
  },

},{
  timestamps:true
});

const Admin = mongoose.model('Admin',adminSchema)

module.exports=Admin