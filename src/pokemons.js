// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
function getAllFirePokemons(pokemons) {
  return pokemons.filter((pokemon) => {
    return pokemon.type.includes("Fire");
  });
}
// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon
function shortestPokemon(pokemons) {
  return pokemons.reduce((acc, pokemon) => {
    if (acc.height < pokemon.height) {
      return acc;
    } else {
      return pokemon;
    }
  });
}
// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(pokemons) {
  let average = pokemons.reduce((acc, pokemon) => {
    return acc + pokemon.candy_count;
  }, 0);
  return average / pokemons.length;
}
// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(pokemons) {
  let groundPoke = pokemons.filter((pokemon) => {
    return pokemon.type.includes("Ground");
  });
  return groundPoke.slice(0, 10).map((pokemon) => {
    return pokemon.img;
  });
}
// Iteration 5: Find all pokemon names heavier than Pikachu
function getHeavyPokemons(pokemons) {
  let pikachu = pokemons.find((pokemon) => {
    return pokemon.name === "Pikachu";
  });
  return pokemons.filter((pokemon) => {
    return pokemon.weight > pikachu.weight;
  });
}
// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(pokemons) {
  let order = pokemons.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
  });
  return order.slice(0, 20).map((pokemon) => {
    return pokemon.name;
  });
}
// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {
  let strong = pokemons.filter((pokemon) => {
    return pokemon.weaknesses.length === 1;
  });
  return strong.slice(0, 15);
}