import axios from "axios";

export const getPokemon = async <T>(id: number): Promise<T> => {
  const response = await axios.get<T>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );
  return response.data;
};
