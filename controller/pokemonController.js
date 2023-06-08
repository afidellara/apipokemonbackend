const Pokemon = require("../models/Pokemon");


exports.listarPokemon= async (req,res)=>{
    try {
        
        const pokemon = await Pokemon.find(); 
        res.json(pokemon)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error'); 
    } 
}   


// Definir el método para buscar por nombre
exports.buscarPokemonPorNombre = async (req, res) => {
    const { nombre } = req.params; // Obtener el nombre de los parámetros de la solicitud
  
    try {
      // Buscar el Pokémon por su nombre en la base de datos (insensible a mayúsculas y minúsculas)
      const pokemon = await Pokemon.findOne({ nombre: { $regex: new RegExp(nombre, 'i') } });
      
      if (pokemon) {
        // Si se encuentra el Pokémon, devolverlo como respuesta
        res.json(pokemon);
      } else {
        // Si no se encuentra el Pokémon, devolver un mensaje de error
        res.status(404).json({ mensaje: 'El Pokémon no existe' });
      }
    } catch (error) {
      // Manejo de errores en caso de problemas con la base de datos u otros errores
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };


// Definir el método para buscar por ID
exports.buscarPorId = async (req, res) => {
    const { id } = req.params; // Obtener el ID de los parámetros de la solicitud
  
    try {
      // Convertir el ID en un número entero
      const idNumero = parseInt(id);
  
      // Buscar el Pokémon por su ID en la base de datos
      const pokemon = await Pokemon.findOne({ id: idNumero });
  
      if (pokemon) {
        // Si se encuentra el Pokémon, devolverlo como respuesta
        res.json(pokemon);
      } else {
        // Si no se encuentra el Pokémon, devolver un mensaje de error
        res.status(404).json({ mensaje: 'El Pokémon no existe' });
      }
    } catch (error) {
      // Manejo de errores en caso de problemas con la base de datos u otros errores
      res.status(500).json({ mensaje: 'Error interno del servidor' });
    }
  };
  