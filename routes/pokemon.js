const express = require('express'); 
const router = express.Router(); 
const controllerPokemon = require('../controller/pokemonController'); 
 
// router.post('/',controllerProducto.crearProducto); 
router.get('/',controllerPokemon.listarPokemon);
router.get('/:id', controllerPokemon.buscarPorId);
router.get('/:nombre', controllerPokemon.buscarPokemonPorNombre); 

// router.delete('/:id', controllerProducto.eliminarProducto);
 
module.exports = router;    