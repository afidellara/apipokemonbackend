//api:  https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1281

const { MongoClient } = require('mongodb');
const fetch = require('node-fetch');

const url = 'mongodb+srv://afidellara:247365@cluster0.bysiz2t.mongodb.net/';
const dbName = 'apipokemon';

async function connectToDatabase() {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  await client.connect();
  return client.db(dbName);
}

async function fetchAndSavePokemons() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=1&limit=1281');
    const data = await response.json();
    const pokemons = data.results;

    const db = await connectToDatabase();
    const collection = db.collection('pokemons');

    const result = await collection.insertMany(pokemons);
    console.log(`${result.insertedCount} pokemons guardados en la base de datos.`);
  } catch (error) {
    console.error('Error al guardar los pokemons:', error);
  }
}

fetchAndSavePokemons();