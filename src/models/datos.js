const mongoose = require('mongoose');
const { Schema } = mongoose;

const DatosSchema = new Schema({
    cedula: { type: String, required: true},
    nombres: { type: String, required: true},
    apellidos: { type: String, required: true},
    telefono: { type: String, required: true},
    direccion: { type: String, required: true}


    
});

module.exports = mongoose.model('datos', DatosSchema);