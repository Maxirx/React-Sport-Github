const { default: mongoose } = require("mongoose");
const Usuarios = require("mongoose");

const usuariosSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true },
  constraseña: { type: String, required: true },
  uniqueString: { type: String, required: true },
  emailVerify: { type: Boolean, required: true },
  imagen: { type: String },
  pais: { type: String },
  ciudad: { type: String },
  direccion: { type: String },
  from: { type: Array },
});

const Usuarios = mongoose.model("user", usuariosSchema);
module.exports = Usuarios;
