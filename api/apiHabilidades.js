const fetch = require('node-fetch');
const { MongoClient } = require('mongodb');

const urlBase = 'https://pokeapi.co/api/v2/pokemon/';
const totalPokemons = 898;
const mongoURL = 'mongodb+srv://afidellara:247365@cluster0.bysiz2t.mongodb.net/apipokemon';
const dbName = 'apipokemon';
const collectionName = 'habilidades';

async function fetchAndSavePokemonData() {
  const urls = [];

  for (let i = 1; i <= totalPokemons; i++) {
    const url = urlBase + i;
    urls.push(url);
  }

  const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Conexión exitosa con MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const promises = urls.map(async (url) => {
      const response = await fetch(url);
      const data = await response.json();

      const documento = {
        id: data.id,
        nombre: data.name,
        altura: data.height,
        anchura: data.weight,
        habilidades_nombre: data.abilities.map((ability) => ability.ability.name),
        imagen_svg: data.sprites.other.dream_world.front_default,
        imagen_png1: data.sprites.other.home.front_default,
        imagen_minipng2: data.sprites.front_default,
        imagen_minipng3: data.sprites.front_shiny,
        tipos_nombre: data.types.map((type) => type.type.name),
        estatisticas: data.stats.map((type) => type.base_stat)
      };

      await collection.insertOne(documento);
      console.log(`Datos del Pokémon ${data.id} guardados en MongoDB correctamente.`);
    });

    await Promise.all(promises);
    console.log('Todos los datos se han guardado en MongoDB correctamente.');
  } catch (error) {
    console.error('Error al interactuar con MongoDB:', error);
  } finally {
    await client.close();
    console.log('Conexión con MongoDB cerrada.');
  }
}

fetchAndSavePokemonData();