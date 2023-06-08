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