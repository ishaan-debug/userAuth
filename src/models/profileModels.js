import mongoose from "mongoose";

const Detail = new mongoose.Schema({
    profile: {
        type: String,
        unique:true,
        
    },
  experience: {
    type: String,
    required: [true, "Please provide experience"],
    unique: true
  },
  eduaction: {
    type: String,
    required: [true, "Please provide education"],
    unique: true
  },
  skills: {
    type: String,
    required: [true, "Please provide skills"]
  },
  Age: {
    type: String,
    required: [true,"Please provide age"]
  },
  address: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.models.details || mongoose.model("details", Detail);

export default User;
