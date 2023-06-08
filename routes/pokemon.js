const express = require('express'); 
const router = express.Router(); 
const controllerPokemon = require('../controller/pokemonController'); 
 
// router.post('/',controllerProducto.crearProducto); 
router.get('/',controllerPokemon.listarPokemon);
// router.put('/:id', controllerProducto.actualizarProducto); 
// router.get('/:id', controllerProducto.obtenerProducto);
// router.delete('/:id', controllerProducto.eliminarProducto);
 
module.exports = router;    