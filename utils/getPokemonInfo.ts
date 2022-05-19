import { Pokemon } from './../interfaces/pokemon-full';
import pokeApi from '../api/pokeApi';

export const getPokemonInfo = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    const { id, name, sprites } = data;

    return {
      id: id,
      name: name,
      sprites: sprites,
    };
  } catch (error) {
    return null;
  }
};
