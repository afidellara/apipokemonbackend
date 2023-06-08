const mogoose = require('mongoose'); 

const PokemonSchema = mogoose.Schema({
    id: {
        type: String,
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
    imagen_frente1:{
        type: String,
        require: true
    },
    imagen_atras1:{
        type: String,
        require: true
    },
    imagen_frente2:{
        type: String,
        require: true
    },
    imagen_atras2:{
        type: String,
        require: true
    }

}); 

module.exports = mogoose.model('pokemon', PokemonSchema); 