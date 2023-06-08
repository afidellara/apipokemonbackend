const mogoose = require('mongoose'); 

const PokemonSchema = mogoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    }
}); 

module.exports = mogoose.model('pokemon', PokemonSchema); 