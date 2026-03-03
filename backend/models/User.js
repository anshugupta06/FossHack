const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  sleepTime: { type: Number, required: true },
  wakeTime: { type: Number, required: true },
  cleanlinessLevel: { type: Number, min: 1, max: 5 },
  smoking: { type: Boolean, default: false },
  studyHours: { type: Number },
  noiseTolerance: { type: Number, min: 1, max: 5 },
  personalityType: {
    type: String,
    enum: ["Introvert", "Extrovert", "Ambivert"]
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
