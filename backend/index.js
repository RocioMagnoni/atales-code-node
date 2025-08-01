/*const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

//haciendo commit 29-07 wowow  30-07 
//commit para stg
//commit para dev 31/07
//commit para stg 31/07
//commit para prod 31/07
//comit para prod 31/07 dsadasd
//comit para stg 1/08 
//comit para prod 1/08 
//comit para dev 1/08 

// 👇 ESTA es la configuración correcta de CORS
app.use(cors({
  origin: "http://localhost:5173", // el frontend con Vite
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Conexión Mongo
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error(err));

// Rutas
const User = require("./models/User");

app.post("/api/register", async (req, res) => {
  const { name, email, password } = req.body;

  const existing = await User.findOne({ email });
  if (existing) {
    return res.status(400).json({ message: "Correo ya registrado" });
  }

  const newUser = new User({ name, email, password });
  await newUser.save();
  res.status(201).json({ message: "Usuario registrado" });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor backend corriendo en el puerto ${PORT}`));
*/

// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
/*
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
*/

const allowedOrigins = [
  "http://localhost:5173",  // para desarrollo local
  "http://atales.local" // para producción local con Ingress
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requests sin origen (como curl o Postman) o desde origenes válidos
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No autorizado por CORS"));
    }
  },
  credentials: true,
}));


app.use(express.json());

app.use((req, res, next) => {
  console.log(`Petición recibida: ${req.method} ${req.url}`);
  next();
});

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB Atlas"))
  .catch((err) => console.error("Error al conectar con MongoDB:", err));

// Rutas
const authRouter = require("./routes/auth");
app.use("/api", authRouter);

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en el puerto ${PORT}`);
});

