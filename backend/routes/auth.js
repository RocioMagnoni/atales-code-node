/*
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
*/
/*
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Ruta /api/register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Correo ya registrado" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado" });
});

// Ruta /api/login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.status(200).json({
    name: user.name,
    email: user.email,
    _id: user._id,
  });
});

module.exports = router;
*/
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Correo ya registrado" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado" });
});

router.post("/login", async (req, res) => {
    console.log("Body recibido:", req.body);
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Credenciales incorrectas" });
  }

  res.status(200).json({
    name: user.name,
    email: user.email,
    _id: user._id,
  });
});

module.exports = router;
