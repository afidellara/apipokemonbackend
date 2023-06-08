const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;


// Arreglo de URLs de la API de PokéAPI
const apiUrls = [
  'https://pokeapi.co/api/v2/pokemon/1/', 
  'https://pokeapi.co/api/v2/pokemon/2/',
  'https://pokeapi.co/api/v2/pokemon/3/',
  'https://pokeapi.co/api/v2/pokemon/4/',
  'https://pokeapi.co/api/v2/pokemon/5/',
  'https://pokeapi.co/api/v2/pokemon/6/',
  'https://pokeapi.co/api/v2/pokemon/7/',
  'https://pokeapi.co/api/v2/pokemon/8/',
  'https://pokeapi.co/api/v2/pokemon/9/',
  'https://pokeapi.co/api/v2/pokemon/10/',
  'https://pokeapi.co/api/v2/pokemon/11/',
  'https://pokeapi.co/api/v2/pokemon/12/',
  'https://pokeapi.co/api/v2/pokemon/13/',
  'https://pokeapi.co/api/v2/pokemon/14/',
  'https://pokeapi.co/api/v2/pokemon/15/',
  'https://pokeapi.co/api/v2/pokemon/16/',
  'https://pokeapi.co/api/v2/pokemon/17/',
  'https://pokeapi.co/api/v2/pokemon/18/',
  'https://pokeapi.co/api/v2/pokemon/19/',
  'https://pokeapi.co/api/v2/pokemon/20/'

];

// Conexión a la base de datos de MongoDB
const mongoUrl = 'mongodb+srv://afidellara:247365@cluster0.bysiz2t.mongodb.net/';
const dbName = 'apipokemon';


async function consumirArregloAPIyGuardarEnMongoDB() {
    try {
      // Conexión a MongoDB
      const client = await MongoClient.connect(mongoUrl, { useUnifiedTopology: true });
      console.log('Conectado exitosamente a MongoDB');
  
      const db = client.db(dbName);
  
      // Recorrer el arreglo de URLs de la API
      for (const apiUrl of apiUrls) {
        // Consumir la API
        const response = await axios.get(apiUrl);
        const data = response.data;
  
        // Seleccionar los campos deseados del documento y campos anidados
        const documento = {
            id: data.id,
            nombre: data.name,
            altura: data.height,
            anchura: data.weight,
            habilidades_nombre: data.abilities.map((ability) => ability.ability.name),
            imagen_frente1: data.sprites.front_default,
            imagen_atras1: data.sprites.front_default,
            imagen_frente2: data.sprites.front_shiny,
            imagen_atras2: data.sprites.back_shiny,
          // Agrega aquí más campos que deseas seleccionar
        };
  
        // Insertar el documento en MongoDB
        await db.collection('pokemons').insertOne(documento);
        console.log('Documento guardado exitosamente en MongoDB');
      }
  
      // Cerrar la conexión a MongoDB
      client.close();
    } catch (error) {
      console.error('Error al consumir la API o insertar datos en MongoDB:', error);
    }
  }
  
  consumirArregloAPIyGuardarEnMongoDB();