const mogoose = require('mongoose'); 

const PokemonSchema = mogoose.Schema({
    id: {
        type: Number,
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    altura: {
        type: Number,
        require: true
    },
    anchura: {
        type: Number,
        require: true
    },
    habilidades_nombre: {
        type: Array,
        require: true
    },
    imagen_svg:{
        type: String,
        require: true
    },
    imagen_png1:{
        type: String,
        require: true
    },
    imagen_minipng2:{
        type: String,
        require: true
    },
    imagen_minipng3:{
        type: String,
        require: true
    },
    tipos_nombre:{
        type: Array,
        require: true
    }

}); 

module.exports = mogoose.model('habilidades', PokemonSchema); 