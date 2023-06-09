const express = require('express'); 
const router = express.Router(); 
const controllerPokemon = require('../controller/pokemonController'); 
 
// router.post('/',controllerProducto.crearProducto); 

//router.get('/',controllerPokemon.listarPokemon);
//router.get('/:id', controllerPokemon.buscarPorId);
router.get('/habilidades/nombre/:nombre', controllerPokemon.buscarPokemonPorNombre); 
router.get('/habilidades/', controllerPokemon.listarPokemonHabilidades); 
router.get('/tipo/:tipo', controllerPokemon.buscarPokemonPorTipo); 
router.get('/habilidad/:habilidad', controllerPokemon.buscarPokemonPorHabilidad); 
// router.delete('/:id', controllerProducto.eliminarProducto);
 
module.exports = router;    