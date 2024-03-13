import type { Dev } from "./types/";
import { Pokemon } from "./types/pokemon";
import { getPokemon } from "./utils/getPokemon";

const fran: Dev = {
  name: "franco",
  lastname: "di leo",
  eat: () => console.info("ñam ñam"),
  debug: () => console.log("ya wey"),
};

console.log('fran', fran)

async function pokemon() {
    const pokemon = await getPokemon<Pokemon>(1)
    console.log('pokemon name', pokemon.name)
}

pokemon()