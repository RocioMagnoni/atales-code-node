const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

// Forzar uso de la colección "usuarios"
module.exports = mongoose.model("User", UserSchema, "usuarios");
